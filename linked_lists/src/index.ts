(() => {

    // Node class to represent a node in the linked list
    // class Node<T extends { toString(): string }> {
    class Node<T> {
        public data: T | null;
        public next: Node<T> | null = null;
        public prev: Node<T> | null = null;

        constructor(data: T, prev: Node<T> | null = null, next: Node<T> | null = null) {
            this.data = data;
            this.prev = prev;
            this.next = next;
        };

        // public toString(): string { return this.data.toString(); };
    };

    class DoubleLinkedList<T> {
        private size: number = 0;
        private head: Node<T> | null = null;
        private tail: Node<T> | null = null;

        // Empty the linked list - O(n)
        public clear(): void {
            let trav: Node<T> | null = this.head;
            while (trav !== null) {
                const next: Node<T> | null = trav.next;
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
                this.head = new Node<T>(item, null, null);
                this.tail = this.head;
            } else {
                this.head!.prev = new Node<T>(item, null, this.head);
                this.head = this.head!.prev;
            };
            this.size++;
        };

        // Add an item to the end of the linked list - O(1)
        public addAtEnd(item: T): void {
            if (this.isEmpty()) {
                this.head = new Node<T>(item, null, null);
                this.tail = this.head;
            } else {
                this.tail!.next = new Node<T>(item, this.tail, null);
                this.tail = this.tail!.next;
            };
            this.size++;
        };

        public peekFirst(): T | null {
            if (this.isEmpty()) throw new Error('List is empty');
            return this.head!.data;
        };

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
            this.tail = this.tail!.prev;
            this.size--;

            // If the list is now empty, set the head to null
            if (this.isEmpty()) this.head = null;
            // Otherwise, set the next pointer of the new tail to null
            else this.tail!.next = null;

            return data;
        };

        // Remove an arbitrary node from the linked list - O(1)
        private removeNode(node: Node<T>): T | null {
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

            let trav: Node<T> | null = this.head;

            // Start traversing the linked list from the head
            if (index < this.size / 2) {
                let i = 0;
                for (trav = this.head; i !== index; i++) trav = trav!.next;

                // Start traversing the linked list from the tail
            } else {
                let i = this.size - 1;
                for (trav = this.tail; i !== index; i--) trav = trav!.prev;
            };

            return this.removeNode(trav!);
        };

        // Remove a particular value from the linked list - O(n)
        public remove(value: T): boolean {
            let trav: Node<T> | null = this.head;

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
            let trav: Node<T> | null = this.head;
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


    const myList = new DoubleLinkedList<number>();
    myList.addAtEnd(2);
    console.log('1', myList, '\n');

    myList.addAtStart(1);
    console.log('2', myList, '\n');

    myList.clear();
    console.log('3', myList, '\n');

    myList.addAtEnd(3);
    myList.addAtStart(4);
    console.log('4', myList.peekLast());
    console.log(myList.peekFirst(), '\n');

    myList.removeLast();
    console.log('5', myList, '\n');

    myList.removeFirst();
    console.log('6', myList, '\n');

    myList.addAtEnd(5);
    myList.addAtStart({ greeting: 'hello' } as any);
    myList.addAtStart(6);
    myList.addAtEnd(6);
    console.log('7', myList, '\n');

    myList.removeAt(0);
    console.log('8', myList, '\n');

    myList.remove(5);
    console.log('9', myList, '\n');

    console.log(myList.indexOf(6));
    console.log(myList.contains(6));

})();