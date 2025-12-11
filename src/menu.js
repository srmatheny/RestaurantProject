
import foodImg from "./img/food.jpg";

const contentDiv = document.querySelector(".content");

export default function loadMenu() {
    //alert("Hello from home...");

    const newHeaderText = document.createElement("h1");
    newHeaderText.classList.add("hdText");
    var t = document.createTextNode("MENU");
    newHeaderText.appendChild(t);
    contentDiv.appendChild(newHeaderText);

    const image = document.createElement("img");
    image.src = foodImg;
    image.width = "750";
    image.height = "500";
    contentDiv.appendChild(image);

    const newMenu = document.createElement("p");
    newMenu.classList.add("menu");
    newMenu.innerText = "Our Daily Menu"
    contentDiv.appendChild(newMenu);
    
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container"); 
    

    //add food list and append to container

    //add wine list and append to container

          
    


}
