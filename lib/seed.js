import db from "./db.js";

db.exec(`DROP TABLE IF EXISTS listings`);

db.exec(`
    CREATE TABLE listings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    booking_id TEXT,
    client TEXT, 
    unit TEXT, 
    return DATE,
    status TEXT
    )`) ;

const clientNames = [
  "Olivia Smith", "Liam Johnson", "Emma Brown", "Noah Williams", "Ava Jones",
  "Elijah Garcia", "Sophia Martinez", "James Anderson", "Isabella Lee", "Lucas Perez",
  "Mia Wilson", "Henry Kim", "Charlotte Moore", "Benjamin White", "Amelia Scott",
  "Alexander Nguyen", "Harper Adams", "Michael Rivera", "Evelyn Thomas", "Daniel Hall",
  "Abigail Young", "Matthew Allen", "Emily Hernandez", "Jack King", "Elizabeth Wright",
  "Sebastian Lopez", "Sofia Hill", "David Green", "Scarlett Baker", "Joseph Nelson",
  "Chloe Carter", "Samuel Mitchell", "Victoria Roberts", "John Turner", "Grace Phillips",
  "Owen Campbell", "Hannah Parker", "Wyatt Evans", "Ella Edwards", "Leo Collins"
];
const carUnits = [
  "Tesla Model S", "Ford Mustang", "Chevy Camaro", "Honda Civic", "Toyota Corolla",
  "BMW X5", "Audi A4", "Mercedes-Benz C-Class", "Hyundai Elantra", "Kia Seltos",
  "Mazda CX-5", "Jeep Wrangler", "Nissan Altima", "Volkswagen Golf", "Volvo XC60",
  "Subaru Outback", "Lexus RX", "Porsche Cayenne", "Dodge Charger", "Jaguar XF",
  "Mini Cooper", "Acura TLX", "Cadillac CT5", "Fiat 500", "Land Rover Evoque",
  "Tesla Model 3", "Ford F-150", "Chevy Silverado", "Ram 1500", "GMC Sierra",
  "Toyota Prius", "Honda Accord", "Nissan Rogue", "Kia Sportage", "Hyundai Tucson",
  "BMW 3 Series", "Audi Q7", "Mazda 3", "Volvo S60", "Jeep Cherokee"
];


const sampleData = Array.from({ length: 40}, (_, i) => ({
    booking_id: `BK-${String(i + 1000).padStart(4, "0")}`,
    client: clientNames[i],
    unit: carUnits[i],
    return: `2025-8-${(i % 30 + 1).toString().padStart(2, "0")}`,
    status: ["Approved", "Rejected", "Pending"][i % 3],
}))

const insert = db.prepare(
    `INSERT INTO listings(booking_id, client, unit, return, status)
    VALUES (@booking_id, @client, @unit, @return, @status)`
);


sampleData.forEach(listing => { insert.run(listing);
});

console.log(sampleData);