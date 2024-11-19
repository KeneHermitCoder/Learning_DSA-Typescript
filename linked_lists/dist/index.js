"use strict";
(() => {
    class Node {
        data;
        next = null;
        prev = null;
        constructor(data, prev = null, next = null) {
            this.data = data;
            this.prev = prev;
            this.next = next;
        }
        ;
    }
    ;
    class DoubleLinkedList {
        size = 0;
        head = null;
        tail = null;
        clear() {
            let trav = this.head;
            while (trav !== null) {
                const next = trav.next;
                trav.next = null;
                trav.prev = null;
                trav.data = null;
                trav = next;
            }
            this.size = 0;
            this.head = null;
            this.tail = null;
        }
        ;
        get getSize() { return this.size; }
        ;
        isEmpty() { return this.getSize === 0; }
        ;
        add(item) {
            this.addAtEnd(item);
        }
        ;
        addAtStart(item) {
            if (this.isEmpty()) {
                this.head = new Node(item, null, null);
                this.tail = this.head;
            }
            else {
                this.head.prev = new Node(item, null, this.head);
                this.head = this.head.prev;
            }
            ;
            this.size++;
        }
        ;
        addAtEnd(item) {
            if (this.isEmpty()) {
                this.head = new Node(item, null, null);
                this.tail = this.head;
            }
            else {
                this.tail.next = new Node(item, this.tail, null);
                this.tail = this.tail.next;
            }
            ;
            this.size++;
        }
        ;
        peekFirst() {
            if (this.isEmpty())
                throw new Error('List is empty');
            return this.head.data;
        }
        ;
        peekLast() {
            if (this.isEmpty())
                throw new Error('List is empty');
            return this.tail.data;
        }
        ;
        removeFirst() {
            if (this.isEmpty())
                throw new Error('List is empty');
            const data = this.head.data;
            this.head = this.head.next;
            this.size--;
            if (this.isEmpty())
                this.tail = null;
            else
                this.head.prev = null;
            return data;
        }
        ;
        removeLast() {
            if (this.isEmpty())
                throw new Error('List is empty');
            const data = this.tail.data;
            this.tail = this.tail.prev;
            this.size--;
            if (this.isEmpty())
                this.head = null;
            else
                this.tail.next = null;
            return data;
        }
        ;
        removeNode(node) {
            if (node === this.head)
                return this.removeFirst();
            if (node === this.tail)
                return this.removeLast();
            node.next.prev = node.prev;
            node.prev.next = node.next;
            const data = node.data;
            node.data = null;
            node.next = null;
            node.prev = null;
            this.size--;
            return data;
        }
        ;
        removeAt(index) {
            if (index < 0 || index >= this.size || this.isEmpty())
                throw new Error('Index out of bounds');
            let trav = this.head;
            if (index < this.size / 2) {
                let i = 0;
                for (trav = this.head; i !== index; i++)
                    trav = trav.next;
            }
            else {
                let i = this.size - 1;
                for (trav = this.tail; i !== index; i--)
                    trav = trav.prev;
            }
            ;
            return this.removeNode(trav);
        }
        ;
        remove(value) {
            let trav = this.head;
            if (value === null)
                for (trav = this.head; trav !== null; trav = trav.next) {
                    if (trav.data === null) {
                        this.removeNode(trav);
                        return true;
                    }
                }
            else
                for (trav = this.head; trav !== null; trav = trav.next) {
                    if (trav.data === value) {
                        this.removeNode(trav);
                        return true;
                    }
                }
            ;
            return false;
        }
        ;
        indexOf(value) {
            let trav = this.head;
            let index = 0;
            if (value === null) {
                for (trav !== null; trav = trav.next; index++)
                    if (trav.data === null)
                        return index;
            }
            else
                for (trav !== null; trav = trav.next; index++)
                    if (trav.data === value)
                        return index;
            return -1;
        }
        ;
        contains(value) {
            return this.indexOf(value) !== -1;
        }
        ;
    }
    ;
    const myList = new DoubleLinkedList();
    myList.addAtEnd(2);
    console.log('1', myList, '\n');
    myList.addAtStart(1);
    console.log('2', myList, '\n');
    myList.clear();
    console.log('3', myList, '\n');
    myList.addAtEnd(3);
    myList.addAtStart(4);
    console.log('3', myList.peekLast());
    console.log(myList.peekFirst(), '\n');
    myList.removeLast();
    console.log('4', myList, '\n');
    myList.removeFirst();
    console.log('5', myList, '\n');
    myList.addAtEnd(5);
    myList.addAtStart(6);
    myList.addAtStart(7);
    console.log('6', myList, '\n');
    myList.removeAt(0);
    console.log('7', myList, '\n');
    myList.remove(5);
    console.log('8', myList, '\n');
    console.log(myList.indexOf(6));
    console.log(myList.contains(6));
})();
//# sourceMappingURL=index.js.map