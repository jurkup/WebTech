// include mysql module
var mysql = require('mysql');

// create a connection variable with the required details
var con = mysql.createConnection({
    host: "localhost", // ip address of server running mysql
    user: "testuser", // user name to your mysql database
    password: "55555", // corresponding password
    database: "testdb" // use the specified database
});

// make to connection to the database.
con.connect(function(err) {
    if (err) throw err;
    // if connection is successful
    con.query("INSERT INTO modul (name,beginn, ende) values ('Test','test','test')", function (err, result, fields) {
        // if any error while executing above query, throw error
        if (err) throw err;
        // if there is no error, you have the result
        console.log(result);
    });
});