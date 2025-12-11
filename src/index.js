// src/index.js
import loadpage from "./loadpage.js";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

import "./styles.css";
import {greeting} from "./greeting.js";


//console.log(greeting);
//alert("Hello darkness my old friend");

//Load page
//loadpage();
loadHome();


// home tab
const homeButton = document.querySelector(".homeBtn");
homeButton.addEventListener("click", () => {
    clearContent();
    loadHome();
});

//menu tab
const menuButton = document.querySelector(".menuBtn");
menuButton.addEventListener("click", () => {
    clearContent();
    loadMenu();
});



function clearContent() {
    const contentBox = document.querySelector(".content");
    contentBox.replaceChildren();
    return;
}

