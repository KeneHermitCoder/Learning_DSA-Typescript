const linkedLists = () => {
    // class Node<T extends { toString(): string }> {
    class NodeItem<T> {
        public data: T | null = null;
        public prev?: NodeItem<T> | null;
        public next: NodeItem<T> | null = null;
        // public toString(): string { return this.data.toString(); };
    };


    class SinglyLinkedList<T> {
        private head: NodeItem<T> | null = null;
        private size: number = 0;

        private Node(data: T): NodeItem<T> {
            class Node extends NodeItem<T> {
                constructor(data: T) {
                    super();
                    this.data = data;
                    delete this.prev;
                    this.next = null;
                }
            };
            return new Node(data);
        };

        // Add an item to the end of the linked list - O(1)
        public add(item: T): void {
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

        // Add an item to the start of the linked list - O(1)
        public addAtStart(item: T): void {
            const node = this.Node(item);
            node.next = this.head;
            this.head = node;
            this.size++;
        };

        // Remove an item from the start of the linked list - O(1)
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
        public remove(value: T): boolean {
            if (this.head === null) {
                return false;
            }
            if (this.head.data === value) {
                this.head = this.head.next;
                this.size--;
                return true;
            }
            let current = this.head;
            while (current.next !== null) {
                if (current.next.data === value) {
                    current.next = current.next.next;
                    this.size--;
                    return true;
                }
                current = current.next;
            }
            return false;
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

        // Check if the linked list is empty
        public isEmpty(): boolean {
            return this.size === 0;
        }
    };


    console.log(`\n
          |||||||      ||||          ||||
        ||||   ||||    ||||          ||||
        ||||   ||||    ||||          ||||
        ||||           ||||          ||||
          |||||        ||||          ||||
            |||||      ||||          ||||
               ||||    ||||          ||||
        ||||   ||||    ||||          ||||
        ||||   ||||    ||||||||||    ||||||||||
          |||||||      ||||||||||    ||||||||||
    `);

    const sLList = new SinglyLinkedList<number>();
    sLList.add(1);
    sLList.addAtStart(2);
    console.log('1', sLList, '\n');
    sLList.addAtStart(4);
    sLList.add(2);
    console.log('2', sLList, '\n');
    console.log('3', (<any>sLList).head, '\n');
    console.log('4', (<any>sLList).head.next, '\n');
    console.log('5', (<any>sLList).head.next.prev, '\n');
    sLList.removeFirst();
    console.log('6', sLList, '\n\n\n');


    class DoubleLinkedList<T> {
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
            };
            return new Node(data, prev, next);
        };

        // Empty the linked list - O(n)
        public clear(): void {
            let trav: NodeItem<T> | null = this.head;
            while (trav !== null) {
                const next: NodeItem<T> | null = trav.next;
                trav.next = null;
                trav.prev = null;
                trav.data = null;
                // trav = null;
                trav = next;
            }
            this.size = 0;
            this.head = null;
            this.tail = null;
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
            };
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
            };
            this.size++;
        };

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

        // Remove an arbitrary node from the linked list - O(1)
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
            node.data = null;
            node.next = null;
            node.prev = null;
            // node = null;

            // Decrement the size of the linked list
            this.size--;

            return data;
        };

        // Remove a node at a specific index - O(n)
        public removeAt(index: number): T | null {

            // if the index is invlid or the list is empty, throw an error
            if (index < 0 || index >= this.size || this.isEmpty()) throw new Error('Index out of bounds');

            let trav: NodeItem<T> | null = this.head;

            // Start traversing the linked list from the head
            if (index < this.size / 2) {
                let i = 0;
                for (trav = this.head; i !== index; i++) trav = trav!.next;

                // Start traversing the linked list from the tail
            } else {
                let i = this.size - 1;
                for (trav = this.tail; i !== index; i--) trav = trav!.prev as NodeItem<T> | null;
            };

            return this.removeNode(trav!);
        };

        // Remove a particular value from the linked list - O(n)
        public remove(value: T): boolean {
            let trav: NodeItem<T> | null = this.head;

            // Provide support for searching for null
            if (value === null)
                for (trav = this.head; trav !== null; trav = trav.next) {
                    if (trav.data === null) {
                        this.removeNode(trav);
                        return true;
                    }
                }
            // Start traversing the linked list from the head
            else
                for (trav = this.head; trav !== null; trav = trav.next) {
                    if (trav.data === value) {
                        this.removeNode(trav);
                        return true;
                    }
                };

            return false;
        };

        // find the index of a particular value in the linked list - O(n)
        public indexOf(value: T): number {
            let trav: NodeItem<T> | null = this.head;
            let index = 0;

            // Provide support for searching for null
            if (value === null) {
                for (trav !== null; trav = trav!.next; index++)
                    if (trav.data === null) return index;
                // Start traversing the linked list from the head
            } else
                for (trav !== null; trav = trav!.next; index++)
                    if (trav.data === value) return index;

            return -1;
        };

        // Check if the linked list contains a particular value - O(n)
        public contains(value: T): boolean {
            return this.indexOf(value) !== -1;
        };
    };


    console.log(`\n
        |||||||||       ||||          ||||
        ||||||||||      ||||          ||||
        ||||  ||||      ||||          ||||
        ||||   ||||     ||||          ||||
        ||||    ||||    ||||          ||||
        ||||    ||||    ||||          ||||
        ||||   ||||     ||||          ||||
        ||||  ||||      ||||          ||||
        ||||||||||      ||||||||||    ||||||||||
        |||||||||       ||||||||||    ||||||||||
    `);
    const dLList = new DoubleLinkedList<number>();
    dLList.addAtEnd(2);
    console.log('1', dLList, '\n');

    dLList.addAtStart(1);
    console.log('2', dLList, '\n');

    dLList.clear();
    console.log('3', dLList, '\n');

    dLList.addAtEnd(3);
    dLList.addAtStart(4);
    console.log('4', dLList.peekLast());
    console.log(dLList.peekFirst(), '\n');

    dLList.removeLast();
    console.log('5', dLList, '\n');

    dLList.removeFirst();
    console.log('6', dLList, '\n');

    dLList.addAtEnd(5);
    dLList.addAtStart({ greeting: 'hello' } as any);
    dLList.addAtStart(6);
    dLList.addAtEnd(6);
    console.log('7', dLList, '\n');

    dLList.removeAt(0);
    console.log('8', dLList, '\n');

    dLList.remove(5);
    console.log('9', dLList, '\n');

    console.log(dLList.indexOf(6));
    console.log(dLList.contains(6));

};

linkedLists();

export { linkedLists, };