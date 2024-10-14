class Todo{
        // Atributos
        arrayObjetos = null;
        constructor(){
            this.stringDeArrayDeObjetos = localStorage.getItem('list');
        }
        // Resto de Métodos
        inicializaDatos =()=>{
            if(this.stringDeArrayDeObjetos){
                alert("Cargando datos desde LocalStorage!");
                this.arrayObjetos = JSON.parse(this.stringDeArrayDeObjetos);
            }
            else{
                alert("No hay datos en LocalStorage, se procederá a crearlos ahora");
                this.arrayObjetos=[
                    {posicion:0, descripcion:"Hit the gym", estadoCompletado:false},
                    {posicion:1, descripcion:"Pay bills", estadoCompletado:true},
                    {posicion:2, descripcion:"Meet George", estadoCompletado:false},
                    {posicion:3, descripcion:"Buy eggs", estadoCompletado:false},
                    {posicion:4, descripcion:"Read a book", estadoCompletado:false},
                    {posicion:5, descripcion:"Organize office", estadoCompletado:false}
                ];
                localStorage.setItem('lista', JSON.stringify(this.arrayObjetos));
            }
        }
        pintarDatos =()=>{
            const itemLista =()=>{
                itemLista=document.querySelector('#myUL');
                this.arrayObjetos.array.forEach(itemActual => {
                if(itemActual.estadoCompletado){
                    lista.innerHTML+=`li id=${itemActual.posicon} class="checked">$
                    {itemActual.descripcion}<span class="close">x</span></li>`;
                }else{
                    lista.innerHTML+=`li id=${itemActual.posicon} class="checked">$
                    {itemActual.descripcion}<span class="close">x</span></li>`;
                }
            });
        }
        }
        reordenaIndices =()=>{
            const itemLista=document.querySelector('LI');
            itemLista.forEach((itemActual,indice)=>{itemActual.id=indice;});
            this.arrayObjetos.forEach((itemActual, indice)=>{itemActual.posicion=indice;});
        }
        registraEvento=(itemActual)=> {
            let elementoLI =document.querySelector(`li#${CSS.escape(itemActual.posicion)}`);
            elementoLI.querySelector('span').addEventListener("click", () => {
                let posicion = parseInt(elementoLI.id);
                elementoLI.remove();
                this.arrayObjetos.splice(posicion, 1);
                this.reordenaIndices();
                localStorage.setItem('lista', JSON.stringify(this.arrayObjetos));
            }, false);
        }
        registrarEventosEliminarTarea = () => {
            this.arrayObjetos.forEach(itemActual => {
                this.registraEvento(itemActual);
            });
        }
        registrarEventoMarcarTareaCompletada =()=>{
            const lista=documen.querySelector('#myUL');
            let posicion = -1;
            lista.addEventListener("click", (ev) => {
                if(ev.target.tagName === 'LI'){
                    ev.target.classList.toggle('checked');
                    posicion = parseInt(ev.target.id);
                    this.arrayObjetos[posicion].estadoCompletado=!this.arrayObjetos[posicion].estadoCompletado
                    localStorage.setItem('lista', JSON.stringify(this.arrayObjetos));

                }
            }, false);
        }
        guardarDatos =(nuevaDescripcion)=> {
            this.arrayObjetos.push({poscion:this.arrayObjetos.length,
            descripcion:nuevaDescripcion,estadoCompletado:false});
            localStorage.setItem('lista', JSON.stringify(this.arrayObjetos));
        }
        nuevoElemento=()=>{
            const inputValue =document.querySelector("#myInput").value;
            if(inputValue === ''){
                alert("You mus write somthing!");
            } else {
                let lista=document.querySelector('#myUL');
                lista.innerHTML+=`<li id=${this.arrayObjetos.length}>${inputValue}<span class="close">x</span></li>`;
                this.guardarDatos(inputValue);
                document.querySelector("#myInput").value = "";
                this.registrarEventosEliminarTarea();
            }
        }
        main = ()=>{
            this.inicializaDatos();
            this.pintarDatos();
            this.registrarEventosEliminarTarea();
            this.registrarEventoMarcarTareaCompletada();
            const botonAdd =document.querySelector(".addBtn");
            botonAdd.addEventListener('click', this.nuevoElemento, false);
        }
    
}
// Cuerpo principal del programa
const app = new Todo();
app.main();
