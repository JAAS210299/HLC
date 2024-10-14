// Declaración de variables
let myNodelist = null;
let i = 0;
let close=null;
let list = null;
let span = null; 
let txt = null;
let div = null;

// Declaración de funciones
const crearBotonesX = () => {
  for (i = 0; i < myNodelist.length; i++)
  myNodelist[i].innerHTML+=`<span class="close">x</span>`;
}

const registrarEventosEliminarTarea=()=> {
  for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click",
    function() {
      div = this.parentElement;
      div.remove();
    }
    , "false");
  }
}

const registrarEventoMarcaTareaCompletada=()=> {
  list = document.querySelector('#myUL');
  list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },false);
}

// Create a new list item when clicking on the "Add" button
const nuevoElemento = () => {
  const inputValue = document.querySelector("#myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").innerHTML+=`<li>${inputValue}<span class="close">x</span></li>`;
  }
  document.getElementById("myInput").value = "";
  close =  document.querySelectorAll(".close");
  registrarEventosEliminarTarea();
}

const main=()=>{
  myNodelist =  document.querySelectorAll("LI");
  crearBotonesX();
  close =  document.querySelectorAll(".close");
  registrarEventosEliminarTarea();
  registrarEventoMarcaTareaCompletada();
  const elementoSpan = document.querySelector(".addBtn");
  elementoSpan.addEventListener("click", nuevoElemento, "false");
}
// Cuerpo principal del programa
main();

