const http = require("http");
const mysql = require("mysql");

console.log('verbindungsaufbau');

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "password",
    database: "testdb"
});

con.connect(function (err) {
    if(err) throw err;
    console.log('Connected!');
});