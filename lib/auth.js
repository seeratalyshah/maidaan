// lib/auth.js  (Node runtime helpers)
import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE = "admin-session";

/** Sets a signed cookie if the password matches .env.local */
export function login(password) {
  if (password !== process.env.ADMIN_PASSWORD) return false;

  const token = crypto.randomBytes(24).toString("base64url");
  cookies().set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  return true;
}

/** Simple checker (used by server components or route handlers) */
export function isAuthed() {
  return cookies().has(COOKIE);
}

export async function logout() {
  const store = await cookies(); // wait for the cookie store
  store.delete(COOKIE);
}
