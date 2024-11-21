const mysql = require("mysql2");

const connect = mysql.createConnection({
  host: DB_NAME,
  user: DB_USER,
  password: DB_PASS,
  database: DB_DBNAME,
});

connect.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database.");
});

module.exports = connect; // Export the connection for use in other files
