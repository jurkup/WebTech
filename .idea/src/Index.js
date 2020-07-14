const express = require("express")
const bodyParser = require("body-parser")
const http = require("http");
const mysql = require("mysql");
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("Connection.json"));
const app = express();

console.log('verbindungsaufbau');

var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

con.connect(function (err) {
    if(err) throw err;
    console.log('Connected!');
});

app.post("/NewModul", (request, response) => {
    con.query("INSERT INTO MODUL(Name,Beginn,Ende) VALUES("
        + '"' + request.body.name + '",'
        + '"' + request.body.beginn + '",'
        + '"' + request.body.ende,
        function (err) {
            if (err)
                throw err;
            else {
                console.log("Modul created");
            }
        })
})