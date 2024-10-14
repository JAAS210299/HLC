class Todo {
  // Atributos
  arrayObjetos = null;
  // Constructor y atributos
  constructor(datosIniciales) {
    this.stringDeArrayDeObjetos = localStorage.getItem("lista");
    this.inicializaDatos(datosIniciales);
  }
  // Resto de Métodos
    inicializaDatos=(arrayObjetosFetch) => {
        if (this.stringDeArrayDeObjetos) {
        alert("Cargando datos desde LocalStorage!");
        this.arrayObjetos = JSON.parse(this.stringDeArrayDeObjetos);
        } else {
        alert(
            "No hay datos en LocalStorage, se procederá a cargarlos desde https://jsonplaceholder.typicode.com/todos"
        );
        this.arrayObjetos = arrayObjetosFetch.map((obj) => {
            return {
            posicion: obj.id,
            descripcion: obj.title,
            estadoCompletado: obj.completed,
            };
        });
        localStorage.setItem("lista", JSON.stringify(this.arrayObjetos));
        } // Esta llave cierra el método inicializaDatos
    }

    pintarDatos=() => {
        lista = document.getElementById("myUL")
        arrayDeObjetos.forEach(element => {
            if(!element.estadoCompletado)
                lista.innerHTML+=`<li id=${element.posicion}>${element.posicion}<span class="close>x</span></li>`;
            else
                lista.innerHTML+=`<li id=${element.posicion} class="checked">${element.descripcion}<span class="close">x</span></li>`;
        });
    }

    reordenarIndices=() => {
        const itemsLista = document.querySelectorAll('LI');
            itemsLista.forEach((itemActual, indice) => {itemActual.id=indice;});
            this.arrayObjetos.forEach((itemActual, indice) => {itemActual.id=indice;});
    }

    registraEvento=(itemActual) => {
        let elementoLI =document.querySelector(`li#${CSS.escape(itemActual.posicion)}`);
        elementoLI.querySelector('span').addEventListener("click", () => {
            let posicion = parseInt(elementoLI.id);
            elementoLI.remove();
            this.arrayObjetos.splice(posicion, 1);
            this.reordenarIndices();
            localStorage.setItem('lista', JSON.stringify(this.arrayObjetos));
        }, false);
    }

    registrarEventosEliminarTarea=() => {
        this.arrayObjetos.forEach(itemActual => {
            this.registraEvento(itemActual);
        });
    }

    registrarEventoMarcarTareaCompletada=() => {
        const list = document.querySelector('#myUL');
        let posicion = -1;
        list.addEventListener("click", (ev) => {
            if (ev.target.tagName === "LI") {
                ev.target.classList.toggle("checked");
                posicion=parseInt(ev.target.id);
                this.arrayObjetos[posicion].estadoCompletado=!arrayObjetos[posicion].estadoCompletado;
                localStorage.setItem('lista', JSON.stringify(arrayObjetos));
            }
        },false);
    }

    guardarDatos=(nuevaDescripcion) => {
        this.arrayObjetos.push({posicion:arrayDeObjetos.length, descripcion:nuevaDescripcion, estadoCompletado:false});
        localStorage.setItem('lista', JSON, stringify(this.arrayObjetos));
    }

    nuevoElemento=() => {
        const inputValue = document.querySelector("#myInput").value;
        {
            if(inputValue === ''){
                alert("¡You must write something!");
            } else {
                let lista = document.querySelector("#myInput");
                lista.innerHTML+=`<li id=${arrayDeObjetos.length}>${inputValue}<span class="close">x</span></li>`;
                this.guardarDatos(inputValue);
                document.getElementById("myUL")
                close = document.querySelectorAll(".close");
                registrarEventosEliminarTarea();
                GuardarDatos(inputValue)
            }
            document.getElementById("myInput".value="");
        }
    }

    main=() => {
        this.inicializa();
        this.PintarDatos();
        this.registrarEventosEliminarTarea();
        this.registrarEventoMarcaTareaCompletada();
        const botonAdd = document.querySelector(".addBtn");
        botonAdd.addEventListener("click", this.nuevoElemento, "false");
    }
}
export {Todo};

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
