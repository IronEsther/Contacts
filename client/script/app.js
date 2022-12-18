import loadHome from './pages/loadHome.js';
import contactWithoutLogin from './pages/contactWithoutLogin.js';
import {loadLogin, changeNav} from './pages/loadLogin.js';
import errorPage from './pages/errorPage.js';

const routes = {
  home: { hash: '#home', function: loadHome },
  contacts: { hash: '#contacts', function: contactWithoutLogin },
  login: { hash: '#login', function: loadLogin },
  loadContacts: { hash: '#contact', function: changeNav },
  error: { function: errorPage },
};

// eslint-disable-next-line no-undef
const router = new Router(routes);

router.urlResolve();

const home = document.querySelector('#home');
home.addEventListener('click', () => {
  router.navigate('#home');
});

const contacts = document.querySelector('#contacts');
contacts.addEventListener('click', () => {
  router.navigate('#contacts');
});

const loginBtn = document.querySelector('#login');
loginBtn.addEventListener('click', () => {
  if (loginBtn.id === 'contact') {
    router.navigate('#contact');
  } else {
    router.navigate('#login');
  }
});