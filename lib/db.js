import Database from "better-sqlite3"
import path from 'path'

const db = new Database(path.resolve(process.cwd(), 'data.sqlite'));
export default db