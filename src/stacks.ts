import { DoubleLinkedList, } from './linked_lists';

interface IStack<T> {
    push(item: T): void;
    pop(): T | null;
    peek(): T | null;
}

export default class Stack<T> implements IStack<T> {

    private stack: DoubleLinkedList<T> = new DoubleLinkedList<T>();

    // Optionally pass in the first item upon initialization, otherwise the stack will be empty
    constructor(first_item?: T) {
        if (first_item) this.push(first_item);
    }

    // Get the size of the stack - O(1)
    private size(): number {
        return this.stack.size();
    }

    // Check if the stack is empty - O(1)
    private isEmpty(): boolean {
        return this.size() === 0;
    }

    // Push an item onto the stack - O(1)
    public push(item: T): void {
        this.stack.addAtEnd(item);
    }

    // Remove/pop off an item from the top of the stack - O(1)
    public pop(): T | null {
        return this.stack.removeLast();
    }

    // Get the top item of the stack - O(1)
    public peek(): T | null {
        if (this.isEmpty()) throw new Error('Stack is empty');
        return this.stack.peekLast();
    }
}