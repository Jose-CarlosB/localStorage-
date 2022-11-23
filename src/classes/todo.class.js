export class Todo {

    static fromJson({ id, tarea, completado, creados }) {
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creados = creados;

        return tempTodo;
    }
    constructor(tarea) {
        this.tarea = tarea;

        this.id = new Date().getDate();
        this.completado = false;
        this.creado = new Date();


    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}