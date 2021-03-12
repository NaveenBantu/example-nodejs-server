import Todo from '../model/Todo.js';

export class TodoDB {

    // constructor /////

    constructor() {

        this.todos = new Map();
        this.count = 0;

        this.create(
            new Todo(
                'Learn React',
                'Learn building modern Web UIs with React.'
            )
        );

        this.create(
            new Todo(
                'Organize my Emails',
                'Clean up and organize my email account.'
            )
        );

        this.create(
            new Todo(
                'Meet Duke',
                'Discuss differences between Java and JavaScript.'
            )
        );

    }

    // methods /////

    async create(todo) {

        this.count++;
        todo.id = this.count;
        this.todos.set(todo.id, todo);
        return todo.id;

    }

    async read(todoId) {

        return this.todos.get(todoId);

    }

    async update(todo) {

        if (this.todos.has(todo.id)) {

            this.todos.set(todo.id, todo);
            return true;

        } // if
        else {

            return false;

        } // if

    }

    async delete(todoId) {

        return this.todos.delete(todoId);

    }

    async all() {

        return Array.from(this.todos.values());

    }

}

const todoDB = new TodoDB();

export default todoDB;
