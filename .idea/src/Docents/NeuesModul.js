var mysql = require('mysql');

function getConnection() {
    let connection = mysql.createConnection({
        host: "localhost",
        user: "testuser",
        password: "testuser",
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
function insertNewModul(name, beginn,ende){
    let con = getConnection();
    con.connect(function(err) {
        if (err) throw err;
        var sqlStatment = "INSERT INTO modul (Name, Beginn, Ende) VALUES (" +
            Modul.name + ", " +
            Modul.beginn + " " +
            Modul.ende + ";";
        con.query(sqlStatment, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
        });
    });
}

function newModul() {

    class Modul {
        constructor(modul_id, name, beschreibung,beginn, ende) {
            this.name = name;
            this.beginn = beginn;
            this.ende = ende;
        }

        toString() {
            return this.name + " " + this.beginn + " " + this.ende;
        }
    }

    modul = new Modul(document.getElementById("modulName").value,
        document.getElementById(modulBeginn).value,
        document.getElementById(modulEnde).value
    );
    insertNewModul();



}