import db from "lib/db";

export default function Handler(req, res) {

    if(req.method === "POST"){
        const { id, user } = req.body;

        if(!user || !user.email){
            return res.status(401).json({ error: "Unauthorized"});
        }

        const update = db.prepare(`UPDATE listings SET status = 'Approved' WHERE id = ? `);
        update.run(id);

        return res.status(200).json({ message: 'Listing approved' });
    }else{
        return res.status(405).json({ message: "Method not allowed" });
    }


}