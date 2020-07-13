var mysql = require('mysql');

function getConnection() {
    let connection = mysql.createConnection({
        host: "localhost",
        user: "testuser",
        password: "5555",
        database: "testdb",
    });
    return connection;
}
/**
 *
 * @param id user to change data
 * @param columnName to update
 * @param entryChange new information
 */


function newModul() {

    class Modul {
        constructor(name, beginn, ende) {
            this.name = name;
            this.beginn = beginn;
            this.ende = ende;
        }

        toString() {
            return this.name + " " + this.beginn + " " + this.ende;
        }
    }

    modul = new Modul(document.getElementById("modulName").value,
        document.getElementById("modulBeginn").value,
        document.getElementById("modulEnde").value
    );
    insertNewModul();

}
function insertNewModul(name, beginn, ende){
    let con = getConnection();
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO modul (Name, Beginn, Ende ) VALUES ('SimMod', '20.20.2020', '21.21.2121');";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}