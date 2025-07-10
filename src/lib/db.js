import Database from "better-sqlite3"
import path from 'path'

const db = new Database(path.resolve(process.cwd(), 'data.sqlite'));

db.prepare(`
    CREATE TABLE IF NOT EXISTS listings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    location TEXT, 
    price TEXT, 
    status TEXT, 
    submittedAt TEXT
    )`).run();

export default db