const express = require("express");
const bodyparser = require("body-parser");
// const request=require("request");

const app = express();

// app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
// res.send("harshit");
// console.log(__dirname+"./");
});

 app.get("/contact.html",function(req,res){
    res.sendFile(__dirname+"/contact.html");
 });

app.post("/contact",function(req,res){
var name=req.body.name;
var email=req.body.email;
console.log(name);
console.log(email);
res.send("your response has submitted");
});

app.listen(3000,function(){
    console.log("server has started");
});