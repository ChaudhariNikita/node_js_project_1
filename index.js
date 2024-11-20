var express = require('express');
var mongoose = require('mongoose');
var db = require("./database/db.js");
var mysql = require("mysql")

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cdac",
});
// console.log(db);
db();
const Schema = mongoose.Schema;
const usersschema = new Schema({
 
  name: String,
  age: Number,
  place: String,
});

const userModel= mongoose.model('users', usersschema);

var app = express();
app.use(express.json());
app.get('/users', async function (req, res) { 
    try { 
        var result = await userModel.find();
        res.send(result);
    } catch(err) {
       res.send(err.message);
   }
});

app.post("/users", async function (req, res) {
    // console.log(req.body);
    try {
        var record = new userModel(req.body);
        var ans = await record.save();
        res.send("record sumbmited");
     } catch (error) {
        res.send(error.message);
    }
  
});

app.put("/users", function (req, res) {
  res.send("update data in database");
});
 
app.delete("/users", function (req, res) {
  res.send("delete data from database");
});

app.get("/userinfo", function (req, res) { 
    connection.query("select * from emp", function (err, result) {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(result);
        }
    });
});

app.post("/userinfo", function (req, res) {
    console.log(req.body);
    connection.query("insert into emp set ?", req.body, function (err, result) { 
        if (err) {
          res.send(err.message);
        } else {
          res.send("user added");
        }
    });
    
 });
app.listen(9000);