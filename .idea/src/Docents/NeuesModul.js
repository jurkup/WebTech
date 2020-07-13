var mysql = require('mysql');


function getConnection() {
    let connection = mysql.createConnection({
        host: "localhost",
        user: "testuser",
        password: "0000",
        database: "testdb",

    });
    console.log('Läuft');
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
    console.log(modul);
    insertNewModul();

}
function insertNewModul(){
    let con = getConnection();
    con.connect(function(err) {
        if (err) throw err;
        //var sql = "INSERT INTO modul (Name, Beginn, Ende ) VALUES ('"+ modul.name +"', '"+ beginn + "', '" + ende+"');";
        var sql = "INSERT INTO modul (Name, Beginn, Ende ) VALUES ('Es', 'funktioniert', 'Juhu');";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
        });
    });

}