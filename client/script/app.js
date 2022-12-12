import Router from "./router.js"

import {
    renderHome,
    renderLogin,
    renderContact,
    renderNotFound
} from "./sites.js"

const routes = {
    home: { hash: "#home", function: renderHome, navlabel: "Home" },
    login: { hash: "#login", function: renderLogin, navlabel: "Login" },
    contact: { hash: "#contact", function: renderContact, navlabel: "Kontakte" },
    error: { function: renderNotFound },
};

let router = new Router(routes);

router.urlResolve();