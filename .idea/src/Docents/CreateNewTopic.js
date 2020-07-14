var modulname = document.getElementById("Modul").value;
var titel = document.getElementById("Titel").value;
var beschreibung = document.getElementById("Beschreibung").value;
var maxMembers = document.getElementById("maxMembers").value;
var beginAnmeldung = document.getElementById("BeginAnmeldung").value;
var endAnmeldung = document.getElementById("EndAnmeldung").value;

// Insert Data into Database
let sqlQuery = ("INSERT INTO THEMA")