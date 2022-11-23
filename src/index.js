
import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();



todoList.todos.forEach(crearTodoHtml);

const newTodo = new Todo('Aprender Javascript');
//todoList.nuevoTodo(newTodo);
//newTodo.imprimirClase();
//todoList.todos[0].imprimirClase();

console.log('todos',todoList.todos);