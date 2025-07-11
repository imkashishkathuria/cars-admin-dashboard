import db from "../../../lib/db.js";

export default function handler(req, res) {

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * pageSize;

    const total = db.prepare("SELECT COUNT(*) AS count FROM listings").get().count;
    const listings = db.prepare("SELECT * FROM listings LIMIT ? OFFSET ?").all(pageSize, offset);

    res.status(200).json({ data: listings, total, page, pageSize });
  
}

