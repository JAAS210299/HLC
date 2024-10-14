import { Todo } from "./Todo.mjs";
import {fetchingJSONData } from "./fetchingData.mjs";
// Cuerpo principal del programa
let datos = await fetchingJSONData("https://jsonplaceholder.typicode.com/todos");
const app = new Todo(datos);
app.main();