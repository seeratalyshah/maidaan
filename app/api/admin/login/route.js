import { NextResponse } from "next/server";
import { login } from "@/lib/auth";

export async function POST(req) {
  const { password } = await req.json();

  if (login(password)) return new NextResponse(null, { status: 204 });

  return NextResponse.json({ error: "Wrong password" }, { status: 401 });
}
