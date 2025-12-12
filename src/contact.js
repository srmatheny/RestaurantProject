
import contactImg from "./img/contact.jpg";
 

const contentDiv = document.querySelector(".content");


export default function loadContact() {

    const newHeaderText = document.createElement("h1");
    newHeaderText.classList.add("hdText");
    var t = document.createTextNode("Contact Us (Mario Luigo Italiano)");
    var s = document.createTextNode("555-555-1234 mario@emailurl.com");
    newHeaderText.appendChild(t);
    newHeaderText.appendChild(s);
    contentDiv.appendChild(newHeaderText);

    const image = document.createElement("img");
    image.src = contactImg;
    image.width = "250";
    image.height = "250";
    contentDiv.appendChild(image);


}
