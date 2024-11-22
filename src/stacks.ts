import { DoubleLinkedList, } from './linked_lists';

export default class Stack<T> {
    private stack: DoubleLinkedList<T> = new DoubleLinkedList<T>();

    constructor(first_item?: T) {
        if (first_item) this.push(first_item);
    };

    public size(): number {
        return this.stack.getSize;
    };

    public isEmpty(): boolean {
        return this.size() === 0;
    };

    public push(item: T): void {
        this.stack.addAtEnd(item);
    };

    public pop(): T | null {
        return this.stack.removeLast();
    };

    public peek(): T | null {
        if (this.isEmpty()) throw new Error('Stack is empty');
        return this.stack.peekLast();
    };
};