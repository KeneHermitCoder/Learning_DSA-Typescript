"use strict";
(() => {
    class NodeItem {
        data = null;
        prev;
        next = null;
    }
    ;
    class SinglyLinkedList {
        head = null;
        size = 0;
        Node(data) {
            class Node extends NodeItem {
                constructor(data) {
                    super();
                    this.data = data;
                    delete this.prev;
                    this.next = null;
                }
            }
            ;
            return new Node(data);
        }
        ;
        add(item) {
            const node = this.Node(item);
            if (this.head === null) {
                this.head = node;
            }
            else {
                let current = this.head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        }
        ;
        addAtStart(item) {
            const node = this.Node(item);
            node.next = this.head;
            this.head = node;
            this.size++;
        }
        ;
        removeFirst() {
            if (this.head === null) {
                return null;
            }
            const data = this.head.data;
            this.head = this.head.next;
            this.size--;
            return data;
        }
        ;
        removeLast() {
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
            while (current.next.next !== null) {
                current = current.next;
            }
            const data = current.next.data;
            current.next = null;
            this.size--;
            return data;
        }
        ;
        remove(value) {
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
        }
        ;
        removeAt(index) {
            if (index < 0 || index >= this.size)
                throw new Error('Index out of bounds');
            if (index === 0)
                return this.removeFirst();
            if (index === this.size - 1)
                return this.removeLast();
            let current = this.head;
            for (let i = 0; i < index - 1; i++)
                current = current.next;
            const data = current.next.data;
            current.next = current.next.next;
            this.size--;
            return data;
        }
        ;
        getSize() {
            return this.size;
        }
        ;
        isEmpty() {
            return this.size === 0;
        }
    }
    ;
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
    const sLList = new SinglyLinkedList();
    sLList.add(1);
    sLList.addAtStart(2);
    console.log('1', sLList, '\n');
    sLList.addAtStart(4);
    sLList.add(2);
    console.log('2', sLList, '\n');
    console.log('3', sLList.head, '\n');
    console.log('4', sLList.head.next, '\n');
    console.log('5', sLList.head.next.prev, '\n');
    sLList.removeFirst();
    console.log('6', sLList, '\n\n\n');
    class DoubleLinkedList {
        size = 0;
        head = null;
        tail = null;
        Node(data = null, prev = null, next = null) {
            class Node extends NodeItem {
                constructor(data = null, prev = null, next = null) {
                    super();
                    this.data = data;
                    this.prev = prev;
                    this.next = next;
                }
                ;
            }
            ;
            return new Node(data, prev, next);
        }
        ;
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
                this.head = this.Node(item, null, null);
                this.tail = this.head;
            }
            else {
                this.head.prev = this.Node(item, null, this.head);
                this.head = this.head.prev;
            }
            ;
            this.size++;
        }
        ;
        addAtEnd(item) {
            if (this.isEmpty()) {
                this.head = this.Node(item, null, null);
                this.tail = this.head;
            }
            else {
                this.tail.next = this.Node(item, this.tail, null);
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
    const dLList = new DoubleLinkedList();
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
    dLList.addAtStart({ greeting: 'hello' });
    dLList.addAtStart(6);
    dLList.addAtEnd(6);
    console.log('7', dLList, '\n');
    dLList.removeAt(0);
    console.log('8', dLList, '\n');
    dLList.remove(5);
    console.log('9', dLList, '\n');
    console.log(dLList.indexOf(6));
    console.log(dLList.contains(6));
})();
//# sourceMappingURL=index.js.map