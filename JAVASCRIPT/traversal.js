// // PARENT and Child element
let parent = document.querySelector("li");
let p1 = parent.parentElement;
console.log(p1);

let child = document.querySelector("div");
let c = child.children;
let d = child.childNodes;
console.log(c, d);

// // Previous element siblings
console.log(document.querySelector(".hero").previousElementSibling);
console.log(
  document.querySelector(".hero").previousElementSibling.previousElementSibling
);

// // Traverse through .hero elements
let traverse = document.querySelectorAll(".hero");
traverse.forEach((i) => {
  console.log(i);
});

// // APPEND CHILD
const ul = document.querySelector("ul"); // Define `ul` properly
const newEl = document.createElement("li");
newEl.textContent = "GIGA CHAD";
ul.appendChild(newEl);

// // REMOVE CHILD
const ulRem = document.querySelector("ul");
const rem = ulRem.children[0]; // Select the child to remove
ulRem.removeChild(rem);

// // Replace child
const list = document.querySelector("ul");
const childToChange = list.children[1]; // Second child of the list

const newList = document.createElement("li");
newList.textContent = "munna bhai";
list.replaceChild(newList, childToChange);


//PARENT NODE

let parentEx = document.querySelector("li");
let p = parent.parentElement;
console.log(p);

let parentNodeEx = document.querySelector("li");
let q = parent.parentNode;
console.log(q);

//MORE - Prev Siblings
console.log(document.querySelector(".hero").previousElementSibling);
console.log(
  document.querySelector(".hero").previousElementSibling.previousElementSibling)

  var a = document.querySelector('.hero')
  console.log(a.previousSibling); // text of prev sib
  

// first and last child

var fChild = document.querySelector('ul')
console.log(fChild.firstChild); // text
console.log(fChild.firstElementChild); // element

var lChild = document.querySelector('ul')
console.log(lChild.lastChild); // text
console.log(lChild.lastElementChild); // element


//Inner and outer text

var a = document.querySelector('h1').innerText
console.log(a); //Satyam Rathore Subscribe to channel ||Satyam Rathore(diaplay none)

var b = document.querySelector('h1').textContent
console.log(b); //Satyam Rathore Subscribe to channel


//GET and set Attributes

let hero = document.querySelector("#hero")
console.log(hero.getAttribute("about"));//heloooooo

hero.setAttribute("example",123)//
console.log(hero.outerHTML);//<div id="hero" about="heloooooo" example="123"></div>

for(let att of hero.attributes){
    console.log(att);
}

