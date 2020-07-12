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

}