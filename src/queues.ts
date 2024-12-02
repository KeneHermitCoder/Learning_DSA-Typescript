import { DoubleLinkedList, } from './linked_lists';

export default class Queue<T> {

    // Using a linked list as the underlying data structure
    private list: DoubleLinkedList<T> = new DoubleLinkedList<T>();
    // private capacity: number = 0;

    // // Using an array as the underlying data structure
    // private list: T[];

    constructor(first_item?: T) {
        // // array implementation
        // this.list = [];

        if (first_item) this.enqueue(first_item);
    };

    // Get the size of the queue - O(1)
    public size(): number {
        return this.list.size;
        // // array implementation
        // return this.list.length;
    };

    // Check if the queue is empty - O(1)
    public isEmpty(): boolean { return this.size() === 0; };

    // Peek at the first item in the queue - O(1)
    public peek(): T | null {
        if (this.isEmpty()) throw new Error('Queue is empty');
        return this.list.peekFirst();
        // // array implementation
        // return this.list[0];
    };

    // Add/enqueue/offer an item to the end of the queue - O(1)
    public enqueue(item: T): void {
        this.list.addAtEnd(item);
        // // array implementation
        // this.list.push(item);
    };

    // Remove/dequeue/poll an item from the start of the queue - O(1)
    public dequeue(): T | null {
        if (this.isEmpty()) throw new Error('Queue is empty');
        return this.list.removeFirst();
        // // array implementation
        // return this.list.shift() as T;
    };
};