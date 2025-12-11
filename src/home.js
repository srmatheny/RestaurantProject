
import restImg from "./rest-page.jpg";

const contentDiv = document.querySelector(".content");

export default function loadHome() {
    //alert("Hello from home...");

    const newHeaderText = document.createElement("h1");
    newHeaderText.classList.add("hdText");
    var t = document.createTextNode("Welcome to the best Italian restaurant in Las Vegas!!");
    newHeaderText.appendChild(t);
    contentDiv.appendChild(newHeaderText);

    const image = document.createElement("img");
    image.src = restImg;
    image.width = "1000";
    image.height = "500";
    contentDiv.appendChild(image);

    const newBlurb = document.createElement("p");
    newBlurb.classList.add("blurb");
    newBlurb.innerText = "Why are we the best? We serve the very best Italian food, that's why!. Come enjoy!"
    contentDiv.appendChild(newBlurb);

    
    


}

