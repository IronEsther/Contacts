const app = document.querySelector("#app");

export const renderContactPage = () => {
  app.innerHTML = `
        <form class="form-inline">
            <p>Vorname: <input placeholder="Vorname..." class="form-control" id="inputVorname" /></p>
            <p>Nachname: <input placeholder="Nachname..." class="form-control" id="inputNachname" /></p>
            <p>Geburtstag: <input type="date" placeholder="Geburtstag..." class="form-control" id="inputGeburtstag" /></p>
            <p>Telefonnummer: <input type="tel" placeholder="Telefonnummer..." class="form-control" id="inputTelefonnummer" /></p>
            <div id="submitButtons"><button type="submit" class="btn btn-info" onclick="addNewContact()">Einreichen</button></div>
        </form>
        <h3>Meine Kontakte</h3>
        <table>
            <thead>
                <tr>
                <th>Vorname</th>
                <th>Nachname</th>
                <th>Geburtstag</th>
                <th>Telefonnummer</th>
                <th></th>
                </tr>
            </thead>
            <tbody id="contactTable">
            </tbody>
        </table>
    `;
    
    fetch("http://localhost:3000/api/getall")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach((contact, index) => {
            document.getElementById('contactTable').innerHTML += '<tr><td id="vorname' + index + '">' + contact.Vorname + '</td><td id="nachname' + index + '">' + contact.Nachname + '</td><td id="geburtstag' + index + '">' + contact.Geburtstag + '</td><td id="telefonnummer' + index + '">' + contact.Telefonnummer + '</td><td><button class="btn btn-warning" onclick=updateContact(' + index + ')>Ueberarbeiten</button></div><button class="btn btn-danger" onclick=deleteContact(' + index + ')>Löschen</button></td></tr>';
        })
    })
};