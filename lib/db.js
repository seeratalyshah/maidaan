// lib/db.js
import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

/* ---------- open db file ---------- */
const dbPath = path.join(process.cwd(), "db", "players.db");
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

export const db = new Database(dbPath, {
  verbose: process.env.NODE_ENV === "development" ? console.log : undefined,
  timeout: 5000,
});

/* ---------- bootstrap schema ---------- */
db.exec(`
  CREATE TABLE IF NOT EXISTS players (
    id                    TEXT PRIMARY KEY,
    full_name             TEXT NOT NULL,
    email                 TEXT NOT NULL UNIQUE,
    dob                   TEXT,
    age                   INTEGER,
    nationality           TEXT,
    cnic                  TEXT,
    father_name           TEXT,
    contact_number        TEXT,
    emergency_contact     TEXT,
    home_address          TEXT,
    position              TEXT,
    secondary_position    TEXT,
    height                REAL,
    weight                REAL,
    trials_attended       TEXT,
    previous_club         TEXT,
    key_strengths         TEXT,
    football_achievements TEXT,
    guardian_name         TEXT,
    guardian_contact      TEXT,
    dominant_foot         TEXT,
    medical_condition         INTEGER,
    major_injuries            INTEGER,
    medication                INTEGER,
    international_tournaments INTEGER,
    pro_football_contracts    INTEGER,
    future_updates            INTEGER,
    consent               INTEGER,
    image_path            TEXT,                       -- new
    created_at            TEXT DEFAULT (datetime('now'))
  );
`);

/* add the column if DB was created before (SQLite < 3.35 has no IF NOT EXISTS) */
try { db.exec(`ALTER TABLE players ADD COLUMN image_path TEXT`); } catch {}

/* attachment table */
db.exec(`
  CREATE TABLE IF NOT EXISTS attachments (
    id         TEXT PRIMARY KEY,
    player_id  TEXT NOT NULL,
    file_path  TEXT NOT NULL,
    label      TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE
  );
`);

/* ----------------- new: press & media inquiries ----------------- */
db.exec(`
  CREATE TABLE IF NOT EXISTS contact_requests (
    id            TEXT PRIMARY KEY,
    name          TEXT NOT NULL,
    email         TEXT NOT NULL,
    organization  TEXT,
    inquiry_type  TEXT,
    message       TEXT NOT NULL,
    created_at    TEXT DEFAULT (datetime('now'))
  );
`);

/* inquiries table (simple contact form) */
db.exec(`
  CREATE TABLE IF NOT EXISTS contact_inquiries (
    id         TEXT PRIMARY KEY,
    name       TEXT NOT NULL,
    email      TEXT NOT NULL,
    subject    TEXT,
    message    TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);

