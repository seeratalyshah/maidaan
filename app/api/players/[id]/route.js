/* app/api/players/[id]/route.js */
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { v4 as uuid } from "uuid";
import path from "path";
import fs from "fs/promises";

const uploadDir = path.join(process.cwd(), "public", "uploads");
await fs.mkdir(uploadDir, { recursive: true });
const toBit = (v) => (v === "Yes" || v === true || v === "true" ? 1 : 0);

/* ---------- GET /api/players/:id ---------- */
export async function GET(_, { params }) {
  const player = db.prepare("SELECT * FROM players WHERE id=?").get(params.id);
  if (!player)
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

  const attachments = db
    .prepare("SELECT id,label,file_path FROM attachments WHERE player_id=?")
    .all(params.id);

  return NextResponse.json({ ok: true, player, attachments });
}

/* ---------- PATCH /api/players/:id ---------- */
export async function PATCH(req, { params }) {
  const fd = await req.formData();

  /* --- handle optional avatar --- */
  let imagePath = null;
  const avatar = fd.get("playerImage");
  if (avatar && avatar.size) {
    const ext = path.extname(avatar.name || ".jpg");
    const fname = `${params.id}_avatar${ext}`;
    await fs.writeFile(
      path.join(uploadDir, fname),
      Buffer.from(await avatar.arrayBuffer()),
    );
    imagePath = `/uploads/${fname}`;
  }

  /* --- collect fields --- */
  const g = (k) => fd.get(k)?.toString() ?? null;
  const updates = {
    full_name: g("full_name"),
    email: g("email"),
    dob: (g("dob") ?? "").slice(0, 10),
    age: g("age") ? Number(g("age")) : null,
    nationality: g("nationality"),
    cnic: g("cnic"),
    father_name: g("father_name"),
    contact_number: g("contact_number"),
    emergency_contact: g("emergency_contact"),
    home_address: g("home_address"),
    position: g("position"),
    secondary_position: g("secondary_position"),
    height: g("height") ? Number(g("height")) : null,
    weight: g("weight") ? Number(g("weight")) : null,
    trials_attended: g("trials_attended"),
    previous_club: g("previous_club"),
    key_strengths: g("key_strengths"),
    football_achievements: g("football_achievements"),
    guardian_name: g("guardian_name"),
    guardian_contact: g("guardian_contact"),
    dominant_foot: g("dominant_foot"),
    medical_condition: toBit(g("medical_condition")),
    major_injuries: toBit(g("major_injuries")),
    medication: toBit(g("medication")),
    international_tournaments: toBit(g("international_tournaments")),
    pro_football_contracts: toBit(g("pro_football_contracts")),
    future_updates: toBit(g("future_updates")),
  };
  if (imagePath) updates.image_path = imagePath;

  /* strip null/undefined so we don't overwrite with NULL unintentionally */
  const set = Object.entries(updates)
    .filter(([, v]) => v !== null)
    .map(([k]) => `${k}=@${k}`)
    .join(", ");

  if (set) db.prepare(`UPDATE players SET ${set} WHERE id=@id`).run({ id: params.id, ...updates });

  /* --- append new attachments (if any) --- */
  const keys = [...fd.keys()].filter((k) => k.startsWith("attachments["));
  if (keys.length) {
    const map = new Map(); // idx → { file,label }
    keys.forEach((k) => {
      const m = k.match(/^attachments\[(\d+)\]\[(file|label)\]$/);
      if (!m) return;
      const idx = +m[1];
      const rec = map.get(idx) || {};
      if (m[2] === "file") rec.file = fd.get(k);
      else rec.label = fd.get(k)?.toString() || "";
      map.set(idx, rec);
    });

    for (const rec of map.values()) {
      if (!rec.file || !rec.file.size) continue;
      const attId = uuid();
      const ext = path.extname(rec.file.name || ".bin");
      const fname = `${params.id}_${attId}${ext}`;
      await fs.writeFile(
        path.join(uploadDir, fname),
        Buffer.from(await rec.file.arrayBuffer()),
      );
      db.prepare(
        `INSERT INTO attachments (id,player_id,file_path,label) VALUES (?,?,?,?)`,
      ).run(attId, params.id, `/uploads/${fname}`, rec.label);
    }
  }

  return NextResponse.json({ ok: true });
}

/* ---------- DELETE /api/players/:id ---------- */
export async function DELETE(_, { params }) {
  db.prepare("DELETE FROM players WHERE id=?").run(params.id);
  return NextResponse.json({ ok: true });
}
