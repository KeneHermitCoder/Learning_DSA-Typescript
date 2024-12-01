// class Node<T extends { toString(): string }> {
class NodeItem<T> {
    public data: T | null = null;
    public prev?: NodeItem<T> | null;
    public next: NodeItem<T> | null = null;
    // public toString(): string { return this.data.toString(); };
}


export class SinglyLinkedList<T> {
    private head: NodeItem<T> | null = null;
    private size: number = 0;

    /**
     * @param data - The data to be stored in the node
     * @returns - The node
     */
    private Node(data: T): NodeItem<T> {
        class Node extends NodeItem<T> {
            constructor(data: T) {
                super();
                this.data = data;
                delete this.prev;
                this.next = null;
            }
        }
        return new Node(data);
    };

    /**
     * 
     * @param item - The item to add
     * @yields - a time complexity of O(1)
     */
    public addAtStart(item: T): void {
        const node = this.Node(item);
        node.next = this.head;
        this.head = node;
        this.size++;
    };

    /**
     * 
     * @param item - The item to add
     * @yields - a time complexity of O(1)
     */
    public addAtEnd(item: T): void {
        const node = this.Node(item);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    };

    /**
     * 
     * @param item - The item to add
     * @param index - The index to add the item
     * @yields - a time complexity of O(n)
     */
    public insertAt(item: T, index: number): void {
        if (index < 0 || index > this.size - 1) throw new Error('Index out of bounds');
        if (index === 0) return this.addAtStart(item);
        else if (index === this.size - 1) return this.addAtEnd(item);
        else {
            const newNode = this.Node(item);
            let position = index;
            let current = <NodeItem<T>>this.head;
            while (position > 1) {
                current = current.next as NodeItem<T>;
                position--;
            }
            const prev = current;
            const next = current.next;
            prev.next = newNode;
            newNode.next = next;
        }
    }

    /**
     * 
     * @returns - The size of the linked list
     * @yields - a time complexity of O(1)
     */
    public removeFirst(): T | null {
        if (this.head === null) {
            return null;
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    };

    // Remove an item from the end of the linked list - O(n)
    public removeLast(): T | null {
        if (this.head === null) {
            return null;
        }
        if (this.head.next === null) {
            const data = this.head.data;
            this.head = null;
            this.size--;
            return data;
        }
        let current = this.head;
        while (current.next!.next !== null) {
            current = current.next as NodeItem<T>;
        }
        const data = current.next!.data;
        current.next = null;
        this.size--;
        return data;
    };

    // Remove an item from the linked list - O(n)
    public remove(value: T): NodeItem<T> | null {
        let current = this.head as NodeItem<T> | null;
        let previous: NodeItem<T> | null = null;
        if (current === null) return current;
        let foundItem = false;

        while (current && !foundItem) {
            if (current.data === value && current === this.head) {
                foundItem = true;
                this.head = current.next;
            } else if (current.data === value) {
                foundItem = true;
                (<NodeItem<T>>previous).next = current.next;
            } else {
                previous = current;
                current = current.next;
            }
        }

        if (foundItem) {
            this.size--;
            const temp = current;
            current = null;
            return temp;
        }
        return current;
    };

    public removeAt(index: number): T | null {
        if (index < 0 || index >= this.size) throw new Error('Index out of bounds');
        if (index === 0) return this.removeFirst();
        if (index === this.size - 1) return this.removeLast();

        let current = this.head;
        for (let i = 0; i < index - 1; i++) current = current!.next;
        const data = current!.next!.data;
        current!.next = current!.next!.next;
        this.size--;
        return data;
    };

    // Get the size of the linked list - O(1)
    public getSize(): number {
        return this.size;
    };

    public search(value: T) {
        let currentNode = this.head;
        while (currentNode !== null)
            if (currentNode && ((currentNode.data) === value)) return currentNode;
            else currentNode = currentNode.next as NodeItem<T>;
        return currentNode;
    }

    // Check if the linked list is empty
    public isEmpty(): boolean {
        return this.size === 0;
    }

    public printValues() {
        let stringValues = '';
        let traversal = this.head;
        do {
            const data = typeof traversal?.data !== 'number' ? JSON.stringify(traversal?.data) : traversal.data;
            if (traversal === this.head) stringValues += `[Head: ${data}] => `;
            else if (traversal === null) stringValues += `[Tail: ${data}]`;
            else stringValues += `[${data}] => `;
            traversal = (traversal && traversal.next) ? traversal.next : null;
        } while (traversal !== null);

        return stringValues;
    };
}


export class DoubleLinkedList<T> {
    private size: number = 0;
    private head: NodeItem<T> | null = null;
    private tail: NodeItem<T> | null = null;

    // Node class to represent a node in the linked list
    // class Node<T extends { toString(): string }> {
    private Node(data: T | null = null, prev: NodeItem<T> | null = null, next: NodeItem<T> | null = null) {
        class Node extends NodeItem<T> {
            constructor(data: T | null = null, prev: NodeItem<T> | null = null, next: NodeItem<T> | null = null) {
                super();
                this.data = data;
                this.prev = prev;
                this.next = next;
            };
        }
        return new Node(data, prev, next);
    };

    // Empty the linked list - O(n)
    public clear(): void {
        let traversal: NodeItem<T> | null = this.head;
        while (traversal !== null) {
            const next: NodeItem<T> | null = traversal.next;
            traversal.next = traversal.prev = traversal.data = null;
            // traversal = null;
            traversal = next;
        }
        this.size = 0;
        this.head = this.tail = null;
    };

    // Get the size of the linked list
    get getSize(): number { return this.size; };

    // Check if the linked list is empty
    public isEmpty(): boolean { return this.getSize === 0; };

    // Add an item to the tail of the linked list - O(1)
    public add(item: T): void {
        this.addAtEnd(item);
    };

    // Add an item to the start of the linked list - O(1)
    public addAtStart(item: T): void {
        if (this.isEmpty()) {
            this.head = this.Node(item, null, null);
            this.tail = this.head;
        } else {
            this.head!.prev = this.Node(item, null, this.head);
            this.head = this.head!.prev;
        }
        this.size++;
    };

    // Add an item to the end of the linked list - O(1)
    public addAtEnd(item: T): void {
        if (this.isEmpty()) {
            this.head = this.Node(item, null, null);
            this.tail = this.head;
        } else {
            this.tail!.next = this.Node(item, this.tail, null);
            this.tail = this.tail!.next;
        }
        this.size++;
    };

    public insertAt(item: T, index: number): void {
        if (index < 0 || index > this.size - 1) throw new Error('Index out of bounds');
        if (index === 0) return this.addAtStart(item);
        if (index === this.size - 1) return this.addAtEnd(item);

        const midpoint = Math.floor((this.size / 2));
        let current = <NodeItem<T>>this.head;
        if (index < midpoint) {
            while (index > 1) {
                current = current.next as NodeItem<T>;
                index--;
            }
        } else {
            current = <NodeItem<T>>this.tail;
            while (index < this.size) {
                current = current.prev as NodeItem<T>
                index++;
            }
        }

        const newNode = this.Node(item);
        const prev = current;
        const next = current.next as NodeItem<T>;

        prev.next = newNode;
        newNode.prev = prev;

        next.prev = newNode;
        newNode.next = next;
    }

    // Get the first item in the linked list - O(1)
    public peekFirst(): T | null {
        if (this.isEmpty()) throw new Error('List is empty');
        return this.head!.data;
    };

    // Get the last item in the linked list - O(1)
    public peekLast(): T | null {
        if (this.isEmpty()) throw new Error('List is empty');
        return this.tail!.data;
    };

    // Remove an item from the start of the linked list - O(1)
    public removeFirst(): T | null {
        if (this.isEmpty()) throw new Error('List is empty');

        // Extract the data from the head and move the header pointer forwards one node
        const data = this.head!.data;
        this.head = this.head!.next;
        this.size--;

        // If the list is now empty, set the tail to null
        if (this.isEmpty()) this.tail = null;
        // Otherwise, set the previous pointer of the new head to null
        else this.head!.prev = null;

        return data;
    };

    // Remove an item from the end of the linked list - O(1)
    public removeLast(): T | null {
        if (this.isEmpty()) throw new Error('List is empty');

        // Extract the data from the tail and move the tail pointer backwards one node
        const data = this.tail!.data;
        this.tail = this.tail!.prev as NodeItem<T> | null;
        this.size--;

        // If the list is now empty, set the head to null
        if (this.isEmpty()) this.head = null;
        // Otherwise, set the next pointer of the new tail to null
        else this.tail!.next = null;

        return data;
    };

    // Remove an arbitrary node from the linked list by switching pointers - O(1)
    private removeNode(node: NodeItem<T>): T | null {
        // if the node is the head, remove the head
        if (node === this.head) return this.removeFirst();
        // if the node is the tail, remove the tail
        if (node === this.tail) return this.removeLast();

        // if the node is in the middle, remove it
        node.next!.prev = node.prev;
        node.prev!.next = node.next;

        // Hold the data of the node temporarily
        const data = node.data;

        // Clean up the memory
        node.data = node.next = node.prev = null;
        // node = null;

        // Decrement the size of the linked list
        this.size--;

        return data;
    };

    // Remove a node at a specific index - O(n)
    public removeAt(index: number): T | null {

        // if the index is invalid or the list is empty, throw an error
        if (index < 0 || index >= this.size || this.isEmpty()) throw new Error('Index out of bounds');

        let traversal: NodeItem<T> | null;
        // Start traversing the linked list from the head
        if (index < this.size / 2) {
            let i = 0;
            for (traversal = this.head; i !== index; i++) traversal = traversal!.next;

            // Start traversing the linked list from the tail
        } else {
            let i = this.size - 1;
            for (traversal = this.tail; i !== index; i--) traversal = traversal!.prev as NodeItem<T> | null;
        }

        return this.removeNode(traversal!);
    };

    // Remove a particular value from the linked list - O(n)
    public remove(value: T): boolean {
        // Provide support for searching for null
        for (let traversal = this.head; traversal !== null; traversal = traversal.next) {
            if (traversal.data === value) {
                this.removeNode(traversal);
                return true;
            }
        }

        return false;
    };

    // find the index of a particular value in the linked list - O(n)
    public indexOf(value: T): number {
        let traversal: NodeItem<T> | null = this.head;
        let index = 0;

        // Provide support for searching for null
        if (value === null) {
            for (traversal !== null; traversal = traversal!.next; index++)
                if (traversal.data === null) return index;
            // Start traversing the linked list from the head
        } else
            for (traversal !== null; traversal = traversal!.next; index++)
                if (traversal.data === value) return index;

        return -1;
    };

    // Check if the linked list contains a particular value - O(n)
    public contains(value: T): boolean {
        return this.indexOf(value) !== -1;
    };

    public printValues() {
        let stringValues = '';
        for (let traversal = this.head; traversal !== null; traversal = traversal.next) {
            if (traversal.data !== null) {
                const data = typeof traversal.data !== 'number' ? JSON.stringify(traversal.data) : traversal.data;
                if (traversal === this.head) stringValues += `[Head: ${data}] => `;
                else if (traversal === this.tail) stringValues += `[Tail: ${data}]`;
                else stringValues += `[${data}] <=> `;
            }
        }
        return stringValues;
    };
}