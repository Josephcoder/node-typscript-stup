import * as mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
// User when you connect to mac
// socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",

const pool = mysql.createPool({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "root",
  password: "root",
  database: "perdua_books",
  waitForConnections: true,
  multipleStatements: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
