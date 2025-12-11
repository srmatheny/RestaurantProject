
const HTMLbody = document.querySelector("body");

export default function loadHTML() {

    const header = document.createElement("header");
    const nav = document.createElement("nav");
    header.textContent = "Napoli Italiano";

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("home-button-class");
    homeBtn.innerText = "Home";

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("home-button-class");
    menuBtn.innerText = "Menu";

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("home-button-class");
    contactBtn.innerText = "Contact";

    nav.append(homeBtn, menuBtn, contactBtn);

    HTMLbody.insertAdjacentElement("afterbegin", header);
    header.append(nav);



}


