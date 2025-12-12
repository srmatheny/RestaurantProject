
import foodImg from "./img/food.jpg";
import pizzaImg from "./img/pizza.png";



const contentDiv = document.querySelector(".content");

export default function loadMenu() {
    //alert("Hello from home...");

    const newHeaderText = document.createElement("h1");
    newHeaderText.classList.add("hdText");
    var t = document.createTextNode("Daily Menu and Signature Dishes");
    newHeaderText.appendChild(t);
    contentDiv.appendChild(newHeaderText);

    const image = document.createElement("img");
    image.src = foodImg;
    image.width = "450";
    image.height = "250";
    contentDiv.appendChild(image);

    
    
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container"); 
    
    //Sig Dishes
    const dishHeader = document.createElement("p");
    dishHeader.classList.add("menu-header");
    dishHeader.innerText = "Signature Dishes - Weekends Only"
    menuContainer.appendChild(dishHeader);

    const dishList = document.createElement("ul");
    dishList.classList.add("dish-list");
    menuContainer.appendChild(dishList);

    const lasa = document.createElement("li");
    lasa.classList.add("dish-list-item");
    lasa.innerText = "Lasagna $25.00";
    dishList.appendChild(lasa);

    const pizza = document.createElement("li");
    pizza.classList.add("dish-list-item");
    pizza.innerText = "Pizza $20.00";
    dishList.appendChild(pizza);

    //Reg Menu
    const dailyHeader = document.createElement("p");
    dailyHeader.classList.add("menu-header");
    dailyHeader.innerText = "Daily Menu Items"
    menuContainer.appendChild(dailyHeader);
    
    const dailyList = document.createElement("ul");
    dailyList.classList.add("dish-list");
    menuContainer.appendChild(dailyList);
    
    const chickenParm = document.createElement("li");
    chickenParm.classList.add("dish-list-item");
    chickenParm.innerText = "Chicken Parm $20.00";
    dailyList.appendChild(chickenParm);

    const eggplantParm = document.createElement("li");
    eggplantParm.classList.add("dish-list-item");
    eggplantParm.innerText = "Eggplant Parm $20.00";
    dailyList.appendChild(eggplantParm);

    //WineList
    const wineHeader = document.createElement("p");
    wineHeader.classList.add("menu-header");
    wineHeader.innerText = "Wine List"
    menuContainer.appendChild(wineHeader);

    const wineList = document.createElement("ul");
    wineList.classList.add("dish-list");
    menuContainer.appendChild(wineList);

    const cab = document.createElement("li");
    cab.classList.add("dish-list-item");
    cab.innerText = "Cabernet $5.00 glass or $50.00 bottle";
    wineList.appendChild(cab);

    const merlot = document.createElement("li");
    merlot.classList.add("dish-list-item");
    merlot.innerText = "Merlot $4.00 glass or $40.00 bottle";
    wineList.appendChild(merlot);


    contentDiv.appendChild(menuContainer);      
    


}
