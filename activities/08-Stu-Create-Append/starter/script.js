var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods

li1.textContent="Apples"
li2.textContent="Pizza"
li3.textContent="Dumplings"
li4.textContent="Cupcakes"
listEl.appendChild(li1)
listEl.appendChild(li2)
listEl.appendChild(li3)
listEl.appendChild(li4)

listEl.style.backgroundColor = "#333333"
listEl.style.padding = "20px"
let liststyle = document.querySelectorAll("li")
liststyle.forEach(function(x){
    x.style.color ="white"
    x.style.padding ="5px"
    x.style.marginLeft="35px"
})
li1.style.backgroundColor = "#666666"
li2.style.backgroundColor = "#777777"
li3.style.backgroundColor = "#888888"
li4.style.backgroundColor = "#999999"




