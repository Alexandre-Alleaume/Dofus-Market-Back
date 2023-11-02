import dotenv from "dotenv";
import pg from "pg";
import { readFile } from "fs/promises";
const { Pool } = pg;

dotenv.config();

const pool = new Pool({
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  /* ssl: {
    rejectUnauthorized: false,
  }, */
});

// export default pool;

// // For AWS

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_DATABASE,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   ssl: {
//     ca: await readFile("./documentation/eu-north-1-bundle.pem"),
//   },
//   /*  ssl: {
//     rejectUnauthorized: false, // désactive la vérification du certificat SSL
//   }, */
// });

export default pool;
