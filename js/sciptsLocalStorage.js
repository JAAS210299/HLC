
// Constante con el objeto ráiz del DOM
let myNodelist = null;
let i = 0;
let close = null;
let list = null;
let span = null;
let txt = null;
let div = null;
let arrayDeObjetos = null;
let stringDeArrayDeObjetos = miStorage.getItem('lista');

//Declaración de funciones
const registrarEventosEliminarTarea=()=>{
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", 
            function (){
                div = this.parentElement;
                div.remove();
                posicion = parseInt(div.id);
                arrayDeObjetos.splice(posicion, 1);
                reordenarIndices();
                localStorage.setItem('lista', JSON.stringify(arrayDeObjetos))
            }
            , "false");
        
    }
}

const reordenarIndices = () => {
    const itemLista = document.querySelectorAll('LI');
        itemLista.forEach((itemActual, index) => {
            itemActual.id=index;
            arrayDeObjetos[index].posicion=index;
        });
}

const registrarEventoMarcaTareaCompletada=()=> {
    list = document.querySelector('#myUL');
    list.addEventListener("click", function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
        posicion=parseInt(ev.target.id);
        arrayDeObjetos[posicion].estadoCompletado=!arrayDeObjetos[posicion].estadoCompletado;
        localStorage.setItem('lista', JSON.stringify(arrayDeObjetos));
      }
    },false);
}

function nuevoElemento()
{
    const input = DOM.querySelector("#myInput");
    if(input.value == ''){
        alert("¡You must write something!");
    } else {
        document.getElementById("myUL").innerHTML+=`<li id=${arrayDeObjetos.length}>${inputValue}<span class="close">x</span></li>`;
        close = document.querySelectorAll(".close");
        registrarEventosEliminarTarea();
        GuardarDatos(inputValue)
    }
    document.getElementById("myInput".value="");
}

const inicializa= () => {
    if (stringDeArrayDeObjetos==null) {

    alert('No existe almacenamiento previo en el navegador y se procederá a crearlo ahora por primera vez');
        // Inicializamos el Array de objetos con los items de la lista
        arrayDeObjetos = [{ posicion:0, descripcion: "Hit the gym", estadoCompletado: false },
        { posicion:1, descripcion: "Pay bills", estadoCompletado:true },
        { posicion: 2, descripcion: "Meet George", estadoCompletado: false },
        { posicion: 3, descripcion: "Buy eggs", estadoCompletado: false },
        { posicion: 4, descripcion: "Read a book", estadoCompletado: false },
        { posicion:5, descripcion: "Organize office", estadoCompletado: false }
        ],
        // Convertimos el array de objetos en un string
        stringDeArrayDeObjetos = JSON.stringify(arrayDeObjetos);
        // guardamos el array en formato string en localstorage con la clave lista miStorage.setItem('lista', stringDeArrayDeObjetos);
        miStorage.setItem('lista', stringDeArrayDeObjetos);
    }
    else{
        alert('Si existe almacenamiento previo en el navegador y se procederá a cargarlo'); // asignamos los elementos recuperados de localstorage a la lista al array de objetos 
        arrayDeObjetos = JSON.parse(stringDeArrayDeObjetos);
    }
}

const PintarDatos = ()=>{
    lista = document.getElementById("myUL")
    arrayDeObjetos.forEach(element => {
        if(!element.estadoCompletado)
            lista.innerHTML+=`<li id=${element.posicion}>${element.posicion}<span class="close>x</span></li>`;
        else
            lista.innerHTML+=`<li id=${element.posicion} class="checked">${element.descripcion}<span class="close">x</span></li>`;
    });
}

const GuardarDatos = (nuevaDescripcion) => {
    let nuevoObjeto = {posicion:arrayDeObjetos.length, descripcion:nuevaDescripcion, estadoCompletado:false};
    arrayDeObjetos.push(nuevoObjeto);
    localStorage.setItem('lista', JSON, stringify(arrayDeObjetos));
}

main();

const main=()=>{
    inicializa();
    PintarDatos();
    myNodelist = document.querySelectorAll("LI");
    //crearBotonesX();
    close = document.querySelectorAll(".close");
    registrarEventosEliminarTarea();
    registrarEventoMarcaTareaCompletada();
    const elementoSpan = document.querySelector(".addBtn");
    elementoSpan.addEventListener("click", nuevoElemento, "false");
}


/*
function nuevoElemento()
{
    const input = DOM.querySelector("#myInput");
    if(input.value == ''){
        alert("¡You must write something!");
    } else {
        document.getElementById("myUL").innerHTML+=`<li id=${arrayDeObjetos.length}>${inputValue}<span class="close">x</span></li>`;
        close = document.querySelectorAll(".close");
        registrarEventosEliminarTarea();
        GuardarDatos(inputValue)
    }
    document.getElementById("myInput".value="");
}



function registrarEventosEliminarTarea(close)
{
    for (i = 0; i < close.length; i++) {
        let elementoActual = close[i];
        elementoActual.onclick=() => {
            let elementoLiContenedor = elementoActual.parentElement;
            let posicion =  elementoLiContenedor.Id; //let posicion = arrayDeStrings.lastIndexOf(elementoActual.innerHTML);
            arrayDeObjetos.splice(posicion, 1); //arrayDeStrings.splice(posicion, 1);
            elementoLiContenedor.remove(); //div.style.display = NADA;
            //Reordeno indices del HTML Y del array
            actualizarIndices();
      };
    }
}

function actualizarIndices(){
    const elementosLi = DOM.querySelectorAll("LI");
    elementosLi.forEach((elementoActual, indice) => {
        elementoActual.id=indice;
        arrayDeObjetos[indice].posicion = indice;
    });
}

function newElement()
{
    const input = DOM.querySelector("#myInput");
    if
        (input.value === '')
            alert("¡ No has escrito nada ene el formulario de entrada !");
    else{
        const li = DOM.createElement('LI');
        li.innerHTML=`${input.value}<span class="close">x</span>`;
        
        const lista = DOM.querySelector("#myUL");
        lista.appendChild(li);

        //Asignación de un id con valor la longitud del array al nuevo elemento que añadimos
        li.id = arrayDeObjetos.length;

        //Añadimos un nuevo elemento al array
        arrayDeObjetos.push({posicion:arrayDeObjetos.length, descripcion:input.value, estadoCompletado:false});

        input.value="";
        //Código modificado de la solución propuesta
        li.childNodes[1].addEventListener('click', () => {
            let posicion = li.id; //let posición = arrayDeStrings.lastIndexOf(li.childNode[1].innerHTML);
            li.remove();
            //Reordeno indices del html y del array
            actualizarIndices();
        }, false);
    }
}

function registrarEventoMarcaTareaCompletada(list){

    let miFuncion = (ev) => {
        if(ev.target.tagName === ITEM){//const ITEM = "LI"
            ev.target.classList.toggle(MARCADO);
        // Utilizando el id del elemento li representado por ev.target accedo al objeto del array de la posición id
        // y cambio a su valor complementario
        arrayDeObjetos[ev.target.id].estadoCompletado=!arrayDeObjetos[ev.target.id].estadoCompletado;
        }
    };

    list.addEventListener(PULSAR, miFuncion, FALSO);
}

*/






/*
        const li = DOM.createElement('LI');
        li.innerHTML = `${inputValue}<span class="close">x</span>`;

        const lista = DOM.querySelector("#myUL");
        lista.appendChild(li);

        //Asignación de un id con valor la longitud del array al nuevo elemento que añadimos
        li.id=arrayDeObjetos.length;

        //Añadimos un nuevo elemento al array
        arrayDeObjetos.push({posicion:arrayDeObjetos.length, descripcion:input.value, estadoCompletado:false});

        input.value="";
        // Código modificado de la solución propuesta
        li.childNodes[1].addEventListener('click', () => {
            //let posicion = arrayDeStrings.lastIndexOf(li.childNodes[1].ineerHTML;
            //arrayDeStrings.splice(posicion, 1)
            li.remove();
        }, false);
    }
}
*/
/*
//Pintar elemenetos de la lista
arrayDeObjetos.array.forEach(elemento => {
    // Creo un nuevo elemento LI
    let nuevoElementoLI = document.createElement("li");
    // Creo el contenidode tipo TEXTO dentro del LI con lo que tenga la propiedad descripción
    let nuevoNodoTxt = document.createTextNode(elemento.descripcion);
    // Asigno los dos anteriores nodos
    nuevoElementoLI.appendChild(nuevoNodoTxt);
    // Asigno el elemento LI a la lista
    document.querySelector("ul").appendChild(nuevoElementoLI);
    // Si la propiedad estadoCompletado del elemento es true le añadimos la clase checked
    if(elemento.estadoCompletado == true)
    {
        let atributoClass = document.createAttribute("class");
        atributoClass.value = "checked";
        nuevoElementoLI.setAttribute(atributoClass);
    }
});

function crearBotonesX(myNodelist)
{
    for(i = 0; i < myNodelist.length; i++){
        span = DOM.createElement(BTNCERRAR);
        txt = DOM.createTextNode(X);
        span.className = CERRAR;
        span.appendChild(txt);
        myNodelist[i].appendChild(span);

        //Asigno un atributo id con valor la posición ene el array del objeto que almacene su información
        myNodelist[i].id = i;
    }
}
*/
