import ManageContact from './loadContact.js';

let token;

export const changeNav = () => {
  if (token != null) {
    const contacte = document.querySelector('#contacts');
    if (contacte != null) {
      contacte.textContent = 'Ihre Kontakte';
      contacte.id = 'contact';
    }
    ManageContact(token);
  } else {
    alert(
      'Sie haben keine Recht hierauf zuzugreifen. Bitte loggen Sie sich ein.',
    );
  }
};

export const loadLogin = () => {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const loginContainer = document.createElement('div');
  const heading = document.createElement('h1');
  const form = document.createElement('forms');
  const benutzername = document.createElement('input');
  benutzername.type = 'text';
  benutzername.default = 'username';
  const benutzernameLabel = document.createElement('label');
  benutzernameLabel.textContent = 'Benutzername:';
  benutzernameLabel.className = 'benutzername';
  const passwort = document.createElement('input');
  passwort.type = 'password';
  passwort.default = 'password';
  const passwortLabel = document.createElement('label');
  passwortLabel.textContent = 'Passwort:';
  passwortLabel.className = 'passwort';
  const senden = document.createElement('input');
  senden.type = 'submit';
  senden.className = 'submitBtn';

  form.appendChild(benutzernameLabel);
  form.appendChild(benutzername);
  form.appendChild(passwortLabel);
  form.appendChild(passwort);
  form.appendChild(senden);
  loginContainer.appendChild(heading);
  loginContainer.appendChild(form);
  container.appendChild(loginContainer);

  senden.addEventListener('click', () => {
    if (benutzername.value === '') {
      alert('Ein Benutzername ist erforderlich und dieses Feld darf nicht leer sein.');
    } else if (passwort.value === '') {
      alert('Ein Passwort ist erforderlich und dieses Feld darf nicht leer sein.');
    } else {
      fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          alg: 'HS256',
          typ: 'JWT',
        },

        body: JSON.stringify({
          username: benutzername.value,
          password: passwort.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token !== undefined) {
            token = `Bearer ${data.token}`;
            changeNav();
          } else {
            alert('Ungültiges Login. Versuchen Sie es wieder.');
          }
        });
    }
  });
};
