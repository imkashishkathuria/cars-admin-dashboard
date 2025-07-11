import db from "../../../lib/db.js";

export default function handler(req, res) {
     try {
    const listings = db.prepare(`SELECT * FROM listings`).all();
    // console.log('listings:', listings);
    res.status(200).json({ data: listings });
  } catch (err) {
    console.error('DB Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

