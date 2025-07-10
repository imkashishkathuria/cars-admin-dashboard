import db from './db.js'


const sampleData = Array.from({ length: 40}, (_, i) => ({
    name: `Car ${i+1}`,
    location: ["California", "New York", "Florida", "Vermont", "LA"][i % 5],
    price: `${(40000 + i *1000).toLocaleString()}`,
    status: ["Approved", "Rejected", "Pending"][i % 3],
    submittedAt: `25-7-${(i % 30 + 1).toString().padStart(2, "0")}`
}))

const insert = db.prepare(
    `INSERT INTO listings(name, location, price, status, submittedAt)
    VALUES (@name, @location, @price, @status, @submittedAt)`
);


sampleData.forEach(listing => insert.run(listing));

console.log(sampleData);