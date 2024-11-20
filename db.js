const mysql = require("mysql2");

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "XPPEN2020",
  database: "mydb",
});

connect.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database.");
});

module.exports = connect; // Export the connection for use in other files
