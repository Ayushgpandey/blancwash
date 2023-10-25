const express = require("express");
const bodyparser = require("body-parser");
const con = require("./connection");
// const request=require("request");

const app = express();

// app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  // res.send("harshit");
  // console.log(__dirname+"./");
});

app.get("/contact.html", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.post("/contact", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;
  console.log(name);
  console.log(email);
  var sql = `INSERT INTO contact_form(name,email,subject,message)VALUES('${name}','${email}','${subject}','${message}')`;
  con.query(sql, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("submitted");
      res.send("your response has submitted");
    }
  });
});

let port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log("server has started");
});
