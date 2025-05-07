/* Contact inquiries API (JSON)
   ─────────────────────────── */
   import { NextResponse, NextRequest } from "next/server";
   import { db } from "@/lib/db";
   import { v4 as uuid } from "uuid";
   import { z } from "zod";
   
   /* ───────── validation schema ───────── */
   const Schema = z.object({
     name:    z.string().min(1),
     email:   z.string().email(),
     subject: z.string().optional().nullable(),
     message: z.string().min(1),
   });
   
   /* ──────────────────────────────────────
      POST  /api/contact   →  save inquiry
      GET   /api/contact   →  JSON / CSV
      ────────────────────────────────────── */
   
   /* ---------- POST ---------- */
   export async function POST(req) {
     const body = await req.json();
   
     /* validate */
     const ok = Schema.safeParse(body);
     if (!ok.success) {
       return NextResponse.json(
         { ok: false, error: "Invalid payload" },
         { status: 422 },
       );
     }
   
     const id = uuid();
     const { name, email, subject, message } = ok.data;
   
     /* insert */
     db.prepare(
       `INSERT INTO contact_inquiries (id,name,email,subject,message)
        VALUES (?,?,?,?,?)`,
     ).run(id, name, email, subject ?? null, message);
   
     return NextResponse.json({ ok: true, id }, { status: 201 });
   }
   
   /* ---------- GET ---------- */
   export async function GET(req) {
     try {
       const inquiries = db
         .prepare(
           `SELECT id,name,email,subject,message,created_at
            FROM contact_inquiries
            ORDER BY created_at DESC`,
         )
         .all();
   
       /* CSV export (optional) */
       if (req.nextUrl.searchParams.get("format") === "csv") {
         if (!inquiries.length)
           return NextResponse.json(
             { ok: false, error: "No inquiries" },
             { status: 404 },
           );
   
         const header = Object.keys(inquiries[0]);
         const csv =
           header.join(",") +
           "\n" +
           inquiries
             .map((row) =>
               header
                 .map((h) => {
                   const v = row[h] ?? "";
                   return String(v).includes(",")
                     ? `"${String(v).replace(/"/g, '""')}"` // escape
                     : v;
                 })
                 .join(","),
             )
             .join("\n");
   
         return new NextResponse(csv, {
           headers: {
             "Content-Type": "text/csv; charset=utf-8",
             "Content-Disposition": 'attachment; filename="contact_inquiries.csv"',
           },
         });
       }
   
       /* JSON list */
       return NextResponse.json({ ok: true, inquiries });
     } catch (e) {
       return NextResponse.json(
         { ok: false, error: e.message },
         { status: 500 },
       );
     }
   }
   