import ManagePage from './loadManageContact.js';

let token;

export const changeNav = () => {
  if (token != null) {
    const login = document.querySelector('#login');
    if (login != null) {
      login.textContent = 'Manage Entries';
      login.id = 'manage';
    }
    ManagePage(token);
  } else {
    alert(
      'Sie haben keine Recht hierauf zuzugreifen. Bitte loggen Sie sich ein',
    );
  }
};

export const loadLogin = () => {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const loginContainer = document.createElement('div');
  const heading = document.createElement('h1');
  const form = document.createElement('forms');
  const username = document.createElement('input');
  username.type = 'text';
  username.default = 'username';
  const usernameLabel = document.createElement('label');
  usernameLabel.textContent = 'Username';
  const password = document.createElement('input');
  password.type = 'password';
  password.default = 'password';
  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = 'Password';
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.className = 'submitBtn';

  form.appendChild(usernameLabel);
  form.appendChild(username);
  form.appendChild(passwordLabel);
  form.appendChild(password);
  form.appendChild(submit);
  loginContainer.appendChild(heading);
  loginContainer.appendChild(form);
  container.appendChild(loginContainer);

  submit.addEventListener('click', () => {
    if (username.value === '') {
      alert('Username is required and cannot be empty');
    } else if (password.value === '') {
      alert('Password is required and cannot be empty');
    } else {
      fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          alg: 'HS256',
          typ: 'JWT',
        },

        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      })
        .then((res) => res.json())
        .then((jsonData) => {
          if (jsonData.token !== undefined) {
            token = `Bearer ${jsonData.token}`;
            changeNav();
          } else {
            alert('Ungültiges Login. Versuchen Sie es wieder.');
          }
        });
    }
  });
};
