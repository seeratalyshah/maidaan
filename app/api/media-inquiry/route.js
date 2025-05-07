/* app/api/media-contact/route.js
   – Press & media inquiry API
------------------------------------------------------------------- */
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { v4 as uuid } from "uuid";
import { z } from "zod";

/* ---------- validation ---------- */
const Schema = z.object({
  name:         z.string().min(1),
  email:        z.string().email(),
  organization: z.string().optional(),
  inquiryType:  z.string().min(1),      // now required
  message:      z.string().min(1),
});

/* ---------- POST /api/media-contact ---------- */
export async function POST(req) {
  const body = await req.json();
  const parsed = Schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues.map((i) => i.message).join(", ") },
      { status: 422 },
    );
  }

  const id = uuid();
  const {
    name,
    email,
    organization,
    inquiryType: inquiry_type,
    message,
  } = parsed.data;

  try {
    db.prepare(`
      INSERT INTO contact_requests
        (id, name, email, organization, inquiry_type, message)
      VALUES
        (@id, @name, @email, @org, @type, @msg);
    `).run({
      id,
      name,
      email,
      org:  organization || null,
      type: inquiry_type,
      msg:  message,
    });

    return NextResponse.json({ ok: true, inquiryId: id }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e.message ?? "Server error" },
      { status: 500 },
    );
  }
}

/* ---------- GET /api/media-contact ----------
     ?format=csv  → download CSV
------------------------------------------------ */
export async function GET(req) {
  try {
    const rows = db
      .prepare("SELECT * FROM contact_requests ORDER BY created_at DESC")
      .all();

    /* CSV export */
    if (req.nextUrl.searchParams.get("format") === "csv") {
      if (!rows.length) {
        return NextResponse.json(
          { ok: false, error: "No inquiries" },
          { status: 404 },
        );
      }

      const header = Object.keys(rows[0]);
      const csv =
        header.join(",") +
        "\n" +
        rows
          .map((r) =>
            header
              .map((h) => {
                const v = r[h] ?? "";
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
          "Content-Disposition": 'attachment; filename="media-inquiries.csv"',
        },
      });
    }

    /* JSON list (default) */
    return NextResponse.json({ ok: true, inquiries: rows });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e.message ?? "Server error" },
      { status: 500 },
    );
  }
}
