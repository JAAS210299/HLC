//Declaración de variable
const myNodelist = null;
let i = 0;
let clsoe = null;
let list = null;
let span = null;
let txt = null;
let div = null;

//Declaración de funciones
const crearBotonesX = () => {
  //Cuerpo principal del programa
  myNodelist = document.getElementsByTagName("LI");

  for (i = 0; i < myNodelist.length; i++) {
    /*span = document.createElement("SPAN");
    txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    */
    myNodelist[i].innerHTML += '<span class ="close"></span>';
  }
};

// Click on a close button to hide the current list item
close = document.getElementsByClassName("close");

const registrarEventosEliminarTarea = () => {
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      div = this.parentElement;
      div.style.display = "none";
    };
  }
};
// Add a "checked" symbol when clicking on a list item
list = document.querySelector("ul");

const registrarEventoMarcaTareaCompletada = () => {
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
};

// Create a new list item when clicking on the "Add" button
const newElement = () => {
  // var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  // var t = document.createTextNode(inputValue);
  // li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
  // span.className = "close";
  // span.appendChild(txt);
  // li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
};

const main = () => {
  myNodelist = document.getElementsByTagName(ITEM);
  crearBotonesX();

  close = document.getElementsByClassName(close);
  registrarEventosEliminarTarea();

  list = document.querySelector(list);
  registrarEventoMarcaTareaCompletada();

  const elemntoSpan = document.querySelector("addBtn");
  elemntoSpan.addEventListener(click, newElement, false);
};
