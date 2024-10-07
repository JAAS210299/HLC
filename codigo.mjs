import { Todo } from "Todo.mjs";
import {fetchinJSONData } from "fetchinData.mjs";
// Cuerpo principal del programa
let datos = await fetchinJSONData("https://jsonplaceholder.typicode.com/todos");
const app = new Todo(datos);
app.main();