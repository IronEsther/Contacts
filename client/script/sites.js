const app = document.querySelector("#app")

import { renderContactPage } from "./pages/contactPage.js"
import { renderhomePage } from "./pages/homePage.js"

export const renderHome = () => {
    app.innerHTML = "Home"
    renderhomePage()
}

export const renderContact = () => {
    app.innerHTML = "Kontakte"
    renderContactPage()
}

export const renderLogin = () => {
    app.innerHTML = "Login"
    renderLoginPage()
}

export const renderNotFound = () => {
    app.innerHTML = "404"
}