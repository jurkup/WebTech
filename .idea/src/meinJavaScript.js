let status = {
    student : "Student",
    mitglied : "Mitglied",
    nictmitglied : "Nichtmitglied"
};

Object.freeze(status);

let raum = {
    raum1 : "Blauer Saal",
    raum2 : "Gelber Saal",
    raum3 : "Roter Saal"
};

Object.freeze(raum);

let adresse1 = {
    straße : "Gartenstraße",
    hausnummer: "27",
    plz : "49740",
    ort : "Haselünne",

    toString : function() {
        return this.straße + " " + this.hausnummer + " " + this.plz + " " + this.ort;
    }
};

let teilnehmer1 = {
    name : "Peter Panter",
    adresse : adresse1,
    status : status.mitglied,

    toString : function () {
        return "Name: " + this.name +
            ", Adresse: " + this.adresse.toString() +
            ", Status: " + this.status;
    }
}

let datumUndUhrzeit1 = {
    tag : 31,
    monat : 12,
    jahr : 2020,
    stunde : 15,
    minute : 20,
    dauerInMin : 180,

    toString : function() {
        return this.tag + "." + this.monat + "." + this.jahr + " " + this.stunde + ":" + this.minute + "Uhr, Dauer: " +
            this.dauerInMin + " min";

    }
};

let rahmenprogramm1 = {
    bezeichnung : "Meet and Greet",
    datumUndUhrzeit : datumUndUhrzeit1,
    raum : raum.raum1,
    teilnehmerListe : new Array(),

    anmelden : function (teilnehmer) {
        let found = false;
        for (let t in this.teilnehmerListe ){
            if (this.teilnehmerListe[t] == teilnehmer){
                found = true;
                break;
            }
        }

        if (!found)
            this.teilnehmerListe[this.teilnehmerListe.length] = teilnehmer;
    },

    toString : function () {
      let s = "Rahmenprogramm : " + this.bezeichnung + "\n"
          + "Datum und Uhrzeit: " + this.datumUndUhrzeit.toString() + "\n"
          + "Raum: " + this.raum + "\n\n"
          + "Teilnehmer: " + "\n------------------\n\n";
      let i = 1;
      for (let t in this.teilnehmerListe){
          s += i++ + ". " + (this.teilnehmerListe[t]).toString() + "\n";
      }
      return s;
    }

};

rahmenprogramm1.anmelden(teilnehmer1);
rahmenprogramm1.anmelden(teilnehmer1);

console.info(rahmenprogramm1.toString());