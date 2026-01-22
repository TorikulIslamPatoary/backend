const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "YOUR_MYSQL_HOST",
  user: "root",
  password: "",
  database: "university_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = db;
