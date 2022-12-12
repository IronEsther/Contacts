
var contacts = [];

var Contact = function (vorname, nachname, geburtstag, telefonnummer) {
    this.vorname = vorname;
    this.nachname = nachname;
    this.geburtstag = geburtstag;
    this.telefonnummer = telefonnummer;
}

window.onload = e => {
    listContacts()
}

//______________________

var addNewContact = function () {
    var vorname = document.getElementById('inputVorname').value;
    var nachname = document.getElementById('inputNachname').value;
    var geburtstag = document.getElementById('inputGeburtstag').value;
    var telefonnummer = document.getElementById('inputTelefonnummer').value;
    var contact = new Contact(vorname, nachname, geburtstag, telefonnummer);
    contacts.push(contact);
    listContacts();
}


var deleteContact = function (i) {
    contacts.splice(i, 1);
    listContacts();
}

var updateContact = function (i) {
    contactId = i;
    document.getElementById('inputVorname').value = contacts[i].vorname;
    document.getElementById('inputNachname').value = contacts[i].nachname;
    document.getElementById('inputGeburtstag').value = contacts[i].geburtstag;
    document.getElementById('inputTelefonnummer').value = contacts[i].telefonnummer;
    document.getElementById("submitButtons").innerHTML = '<button id="updateButton" class="btn btn-warning" onclick=submitUpdatedContact(contactId)>Einreichen</button>';

}

var submitUpdatedContact = function (i) {
    contacts[i].vorname = document.getElementById('inputVorname').value;
    contacts[i].nachname = document.getElementById('inputNachname').value;
    contacts[i].geburtstag = document.getElementById('inputGeburtstag').value;
    contacts[i].telefonnummer = document.getElementById('inputTelefonnummer').value;

    document.getElementById('inputVorname').value = "";
    document.getElementById('inputNachname').value = "";
    document.getElementById('inputGeburtstag').value = "";
    document.getElementById('inputTelefonnummer').value = "";

    listContacts();
}