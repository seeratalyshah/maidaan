/* app/api/players/route.js */
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { v4 as uuid } from "uuid";
import { z } from "zod";
import path from "path";
import fs from "fs/promises";

/* ---------- helpers ---------- */
const uploadDir = path.join(process.cwd(), "public", "uploads");
await fs.mkdir(uploadDir, { recursive: true });

const toBit = (v) => (v === "Yes" || v === true || v === "true" ? 1 : 0);
const Scheme = z.object({ fullName: z.string().min(1), email: z.string().email() });

/* ---------- POST /api/players ---------- */
export async function POST(req) {
  const fd = await req.formData();

  /* validate */
  const ok = Scheme.safeParse({
    fullName: fd.get("fullName")?.toString(),
    email: fd.get("email")?.toString(),
  });
  if (!ok.success)
    return NextResponse.json({ ok: false, error: "Full name & email required" }, { status: 422 });

  const id = uuid();

  /* save avatar */
  let imagePath = null;
  const avatar = fd.get("playerImage");
  if (avatar && avatar.size) {
    const ext = path.extname(avatar.name || ".jpg");
    const name = `${id}_avatar${ext}`;
    await fs.writeFile(path.join(uploadDir, name), Buffer.from(await avatar.arrayBuffer()));
    imagePath = `/uploads/${name}`;
  }

  /* gather primitives */
  const g = (k) => fd.get(k)?.toString() ?? null;
  const data = {
    id,
    full_name: g("fullName"),
    email: g("email"),
    dob: (g("dob") ?? "").slice(0, 10),
    age: g("age") ? Number(g("age")) : null,
    nationality: g("nationality"),
    cnic: g("cnic"),
    father_name: g("fatherName"),
    contact_number: g("contactNumber"),
    emergency_contact: g("emergencyContact"),
    home_address: g("homeAddress"),
    position: g("position"),
    secondary_position: g("secondaryPosition"),
    height: g("height") ? Number(g("height")) : null,
    weight: g("weight") ? Number(g("weight")) : null,
    trials_attended: g("trialsAttended"),
    previous_club: g("previousClub"),
    key_strengths: g("keyStrengths"),
    football_achievements: g("footballAchievements"),
    guardian_name: g("guardianName"),
    guardian_contact: g("guardianContact"),
    dominant_foot: g("dominantFoot"),
    medical_condition: toBit(g("medicalCondition")),
    major_injuries: toBit(g("majorInjuries")),
    medication: toBit(g("medication")),
    international_tournaments: toBit(g("internationalTournaments")),
    pro_football_contracts: toBit(g("proFootballContracts")),
    future_updates: toBit(g("futureUpdates")),
    consent: g("consent") ? 1 : 0,
    image_path: imagePath,
  };

  /* insert player */
  try {
    db.prepare(`
      INSERT INTO players (
        id, full_name, email, dob, age, nationality, cnic, father_name,
        contact_number, emergency_contact, home_address, position,
        secondary_position, height, weight, trials_attended, previous_club,
        key_strengths, football_achievements, guardian_name, guardian_contact,
        dominant_foot, medical_condition, major_injuries, medication,
        international_tournaments, pro_football_contracts, future_updates,
        consent, image_path
      ) VALUES (
        @id,@full_name,@email,@dob,@age,@nationality,@cnic,@father_name,
        @contact_number,@emergency_contact,@home_address,@position,
        @secondary_position,@height,@weight,@trials_attended,@previous_club,
        @key_strengths,@football_achievements,@guardian_name,@guardian_contact,
        @dominant_foot,@medical_condition,@major_injuries,@medication,
        @international_tournaments,@pro_football_contracts,@future_updates,
        @consent,@image_path
      );
    `).run(data);
  } catch (e) {
    if (e.code === "SQLITE_CONSTRAINT_UNIQUE")
      return NextResponse.json({ ok: false, error: "Email already registered" }, { status: 409 });
    throw e;
  }

  /* attachments */
  const files = [...fd.entries()].filter(([k]) => k.includes("attachments"));
  const map = new Map(); // idx -> { file,label }

  files.forEach(([key, val]) => {
    const m = key.match(/^attachments\[(\d+)\]\[(file|label)\]$/);
    if (!m) return;
    const idx = +m[1];
    const obj = map.get(idx) || {};
    if (m[2] === "file") obj.file = val;
    else obj.label = val.toString();
    map.set(idx, obj);
  });

  for (const obj of map.values()) {
    if (!obj.file || !obj.file.size) continue;
    const attId = uuid();
    const ext = path.extname(obj.file.name || ".bin");
    const fname = `${id}_${attId}${ext}`;
    await fs.writeFile(path.join(uploadDir, fname), Buffer.from(await obj.file.arrayBuffer()));
    db.prepare(`INSERT INTO attachments (id,player_id,file_path,label) VALUES (?,?,?,?)`)
      .run(attId, id, `/uploads/${fname}`, obj.label ?? "");
  }

  return NextResponse.json({ ok: true, playerId: id }, { status: 201 });
}

/* ---------- GET /api/players ---------- */
export async function GET(req) {
  try {
    /* ───── 1. players table ───── */
    const base = db
      .prepare("SELECT * FROM players ORDER BY created_at DESC")
      .all();

    /* ───── 2. attachments (all at once) ───── */
    const rowsAtt = db
      .prepare(
        "SELECT id, player_id, label, file_path FROM attachments ORDER BY created_at",
      )
      .all();

    /* group attachments by player_id */
    const byPlayer = rowsAtt.reduce((m, a) => {
      (m[a.player_id] ||= []).push(a);
      return m;
    }, {});

    /* merge rows → always give an array, even empty */
    const players = base.map((p) => ({
      ...p,
      attachments: byPlayer[p.id] || [],
    }));

    /* ───── 3. CSV export (ignores attachments) ───── */
    if (req.nextUrl.searchParams.get("format") === "csv") {
      if (!players.length)
        return NextResponse.json(
          { ok: false, error: "No players" },
          { status: 404 },
        );

      /* turn relative image_path into full URL */
      const origin = req.nextUrl.origin; // e.g. https://maidaan.org.uk
      const rows = players.map((r) => ({
        ...r,
        image_path: r.image_path ? origin + r.image_path : "",
      }));

      const header = Object.keys(rows[0]).filter((k) => k !== "attachments");
      const csv =
        header.join(",") +
        "\n" +
        rows
          .map((r) =>
            header
              .map((h) => {
                const v = r[h] ?? "";
                /* escape commas / quotes */
                return String(v).includes(",")
                  ? `"${String(v).replace(/"/g, '""')}"`
                  : v;
              })
              .join(","),
          )
          .join("\n");

      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": 'attachment; filename="players.csv"',
        },
      });
    }

    /* ───── 4. JSON list (default) ───── */
    return NextResponse.json({ ok: true, players });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
