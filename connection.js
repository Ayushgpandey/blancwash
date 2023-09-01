var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshit@123",
  database: "fastfolds",
});

con.connect(function(error){
  if(error) console.log(error);
  console.log("connected");
});
