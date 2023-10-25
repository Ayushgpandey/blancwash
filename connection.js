var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshit@123",
  database: "blancwash",
});

con.connect(function (error) {
  if (error) console.log(error);
  console.log("connected");
});

module.exports = con;
