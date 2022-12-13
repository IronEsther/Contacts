export default () => {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  let data;

  const loadEntries = () => {
    for (let i = 0; i < data.length; i++) {
      const entry = document.createElement('div');
      const vorname = document.createElement('h1');
      const nachname = document.createElement('h2');
      const geburtsdatum = document.createElement('p');
      const telefonnummer = document.createElement('p');
      const openButton = document.createElement('p');

      vorname.textContent = data[i].text;
      vorname.className = 'info';
      nachname.textContent = data[i].text;
      nachname.className = 'info';
      geburtsdatum.textContent = data[i].date;
      geburtsdatum.className = 'info';
      telefonnummer.textContent = data[i].text;
      telefonnummer.className = 'info';
      openButton.textContent = 'View Entry';
      openButton.className = 'Btn';
      openButton.id = data[i].id;

      entry.appendChild(vorname);
      entry.appendChild(nachname);
      entry.appendChild(geburtsdatum);
      entry.appendChild(telefonnummer);
      entry.appendChild(openButton);
      container.appendChild(entry);

      openButton.addEventListener('click', () => {
        container.innerHTML = '';
        entry.removeChild(openButton);

        const text = document.createElement('p');
        text.textContent = data[i].Content;
        vorname.textContent = data[i].text;
        vorname.className = 'info';
        nachname.textContent = data[i].text;
        nachname.className = 'info';
        geburtsdatum.textContent = data[i].date;
        geburtsdatum.className = 'info';
        telefonnummer.textContent = data[i].text;
        telefonnummer.className = 'info';

        entry.appendChild(vorname);
        entry.appendChild(nachname);
        entry.appendChild(geburtsdatum);
        entry.appendChild(telefonnummer);
        entry.appendChild(text);
        container.appendChild(entry);
      });
    }
  };

  fetch('http://localhost:3000/api/getall', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((jsonData) => {
      data = jsonData;
    })
    .then(() => {
      loadEntries();
    });
};
