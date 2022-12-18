export default (token) => {
  const container = document.querySelector('.container');
  let data;
  container.innerHTML = '';

  const loadContact = () => {
    container.innerHTML = '';
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Neuer Kontakt';
    addBtn.className = 'addBtn';
    container.appendChild(addBtn);
    

    addBtn.addEventListener('click', () => {
      container.innerHTML = '';
      const pageBreak1 = document.createElement('br');
      const pageBreak2 = document.createElement('br');
      const pageBreak3 = document.createElement('br');
      const pageBreak4 = document.createElement('br');
      const form = document.createElement('form');
      const vorname = document.createElement('input');
      const labelVorname = document.createElement('label');
      const nachname = document.createElement('input');
      const labelNachname = document.createElement('label');
      const geburtstag = document.createElement('input');
      const labelGeburtstag = document.createElement('label');
      const telefonnummer = document.createElement('input');
      const labelTelefonnummer = document.createElement('label');
      const submitBtn = document.createElement('input');

      labelVorname.textContent = 'Vorname:';
      labelNachname.textContent = 'Nachname:';
      labelGeburtstag.textContent = 'Geburtstag:';
      labelTelefonnummer.textContent = 'Telefonnummer:';

      vorname.type = 'text';
      vorname.className = 'vornameField';
      nachname.type = 'text';
      nachname.className = 'nachnameField';
      geburtstag.type = 'date';
      geburtstag.className = 'dateField';
      telefonnummer.type = 'text';
      telefonnummer.className = 'telefonnummerField';
      submitBtn.type = 'submit';
      submitBtn.className = 'submitBtn';

      form.appendChild(labelVorname);
      form.appendChild(vorname);
      form.appendChild(pageBreak1);
      form.appendChild(labelNachname);
      form.appendChild(nachname);
      form.appendChild(pageBreak2);
      form.appendChild(labelGeburtstag);
      form.appendChild(geburtstag);
      form.appendChild(pageBreak3);
      form.appendChild(labelTelefonnummer);
      form.appendChild(telefonnummer);
      form.appendChild(pageBreak4);
      form.appendChild(submitBtn);

      container.appendChild(form);

      submitBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (
          vorname.value === '' ||
          nachname.value === '' ||
          geburtstag.value === '' ||
          telefonnummer.value === ''
        ) {
          alert('Please fill out all fields.');
        } else if (
          vorname.value.length > 20 ||
          nachname.value.length > 25 ||
          telefonnummer.value.length > 25
        ) {
          alert('Ungültige Daten oder zu lange Daten. Versuchen Sie es wieder.');
        } else {
          fetch('http://localhost:3000/api/addone', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              Authorization: token,
            },
            body: JSON.stringify({
              data: {
                vorname: vorname.value,
                nachname: nachname.value,
                geburtstag: geburtstag.value,
                telefonnummer: telefonnummer.value,
              },
            }),
          }).then(() => {
            alert('Ein neuer Eintrag wurde hinzugefügt.');
            loadContact();
          });
        }
      });
    });

    fetch("http://localhost:3000/api/getall")
    .then(res => res.json())
      .then((jsonData) => {
        data = jsonData;
      })
      .then(() => {
        for (let i = 0; i < data.length; i++) {
          const contact = document.createElement('table');
          const vorname = document.createElement('td');
          const nachname = document.createElement('td');
          const geburtstag = document.createElement('td');
          const telefonnummer = document.createElement('td');
          const changeBtn = document.createElement('button');
          const deleteBtn = document.createElement('button');

          contact.id = 'contact';
          vorname.textContent = data[i].vorname;
          vorname.className = 'vorname';
          nachname.textContent = data[i].nachname;
          nachname.className = 'nachname';
          geburtstag.textContent = data[i].geburtstag;
          geburtstag.className = 'geburtsdatum';
          telefonnummer.textContent = data[i].telefonnummer;
          telefonnummer.className = 'telefonnummer';
          changeBtn.textContent = 'bearbeiten';
          changeBtn.className = 'bearbeiten';
          changeBtn.id = data[i].id;
          deleteBtn.textContent = 'löschen';
          deleteBtn.className = 'löschen';
          deleteBtn.id = data[i].id;

          contact.appendChild(vorname);
          contact.appendChild(nachname);
          contact.appendChild(geburtstag);
          contact.appendChild(telefonnummer);
          contact.appendChild(changeBtn);
          contact.appendChild(deleteBtn);
          container.appendChild(contact);

          changeBtn.addEventListener('click', () => {
            container.innerHTML = '';
            const pageBreak1 = document.createElement('br');
            const pageBreak2 = document.createElement('br');
            const pageBreak3 = document.createElement('br');
            const pageBreak4 = document.createElement('br');
            const form = document.createElement('form');
            const vorname = document.createElement('input');
            const labelVorname = document.createElement('label');
            const nachname = document.createElement('input');
            const labelNachname = document.createElement('label');
            const geburtstag = document.createElement('input');
            const labelGeburtstag = document.createElement('label');
            const telefonnummer = document.createElement('input');
            const labelTelefonnummer = document.createElement('label');
            const submitBtn = document.createElement('input');

            labelVorname.textContent = 'Vorname:';
            labelNachname.textContent = 'Nachname:';
            labelGeburtstag.textContent = 'Geburtstag:';
            labelTelefonnummer.textContent = 'Telefonnummer:';
            vorname.type = 'text';
            vorname.className = 'vornameField';
            nachname.type = 'text';
            nachname.className = 'nachnameField';
            geburtstag.type = 'date';
            geburtstag.className = 'dateField';
            telefonnummer.type = 'text';
            telefonnummer.className = 'telefonnummerField';
            submitBtn.type = 'submit';
            submitBtn.className = 'submitBtn';


            form.appendChild(labelVorname);
            form.appendChild(vorname);
            form.appendChild(pageBreak1);
            form.appendChild(labelNachname);
            form.appendChild(nachname);
            form.appendChild(pageBreak2);
            form.appendChild(labelGeburtstag);
            form.appendChild(geburtstag);
            form.appendChild(pageBreak3);
            form.appendChild(labelTelefonnummer);
            form.appendChild(telefonnummer);
            form.appendChild(pageBreak4);
            form.appendChild(submitBtn);

            container.appendChild(form);

            submitBtn.addEventListener('click', (ev) => {
              if (
                vorname.value === '' ||
                nachname.value === '' ||
                telefonnummer.value === '' ||
                geburtstag.value === ''
              ) {
                alert('Bitte füllen Sie alle Felder aus.');
              } else if (
                vorname.value.length > 20 ||
                nachname.value.length > 25 ||
                telefonnummer.value.length > 20
              ) {
                alert('Ungültige Daten oder zu lange Daten. Versuchen Sie es wieder.');
              } else {
                ev.preventDefault();
                fetch('http://localhost:3000/api/changeone', {
                  method: 'PUT',
                  headers: {
                    'content-type': 'application/json',
                    Authorization: token,
                  },
                  body: JSON.stringify({
                    data: {
                      id: data[i].id,
                      vorname: vorname.value,
                      nachname: nachname.value,
                      geburtsdatum: geburtstag.value,
                      telefonnummer: telefonnummer.value,
                    },
                  }),
                }).then(() => {
                  alert('Der Eintrag wurde geändert.');
                  loadContact();
                });
              }
            });
          });
          deleteBtn.addEventListener('click', () => {
            fetch('http://localhost:3000/api/delete', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: token,
              },
              body: JSON.stringify({
                id: data[i].id,
              }),
            }).then(() => {
              alert('Der Eintrag wurde gelöscht.');
              loadContact();
            });
          });
        }
      });
  };
  loadContact();
};