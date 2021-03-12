import Priority from "./Priority.js";

/**
 * A TODO is an item, which contains information about some task that should
 * be done at some point in the future.
 */
export default class Todo {

    constructor(caption, description, priority) {

        this.id          = null;
        this.caption     = caption     || '';
        this.description = description || '';
        this.priority    = priority    || Priority.medium;
        this.done        = false;

    }

}