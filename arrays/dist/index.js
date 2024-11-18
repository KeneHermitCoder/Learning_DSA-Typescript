"use strict";
(() => {
    console.log('Learning DSA - Arrays');
    ;
    class ArrayIterator {
        index;
        array;
        constructor(array) {
            this.index = 0;
            this.array = array;
        }
        next() {
            if (this.index >= this.array.length) {
                return { value: undefined, done: true };
            }
            const value = this.array[this.index];
            this.index++;
            return { value, done: false };
        }
    }
    ;
    class MyArray {
        items;
        length = 0;
        capacity = 0;
        constructor(capacity) {
            if (capacity < 0)
                throw new Error('Capacity must be greater than 0');
            this.capacity = capacity;
            this.items = new Array(capacity);
        }
        ;
        size() {
            return this.length;
        }
        ;
        isEmpty() {
            return this.length === 0;
        }
        ;
        get(index) {
            if (index < 0 || index >= this.capacity)
                throw new Error('Index out of bounds');
            return this.items[index];
        }
        ;
        set(index, item) {
            if (index < 0 || index >= this.capacity)
                throw new Error('Index out of bounds');
            this.items[index] = item;
        }
        ;
        clear() {
            for (let i = 0; i < this.capacity; i++) {
                this.items[i] = null;
            }
            ;
            this.length = 0;
        }
        ;
        add(item) {
            if (this.length + 1 >= this.capacity) {
                if (this.capacity === 0)
                    this.capacity = 1;
                else {
                    this.capacity *= 2;
                    const new_items = new Array(this.capacity);
                    for (let i = 0; i < this.length; i++) {
                        new_items[i] = this.items[i];
                    }
                    ;
                }
            }
            this.items[this.length++] = item;
        }
        ;
        removeAt(rm_index) {
            if (rm_index < 0 || rm_index >= this.length)
                throw new Error('Index out of bounds');
            const item = this.items[rm_index];
            const new_items = new Array(this.length - 1);
            let i = 0, j = 0;
            for (; i < this.length; i++, j++) {
                if (i === rm_index)
                    j--;
                else
                    new_items[i] = this.items[i];
            }
            this.items = new_items;
            this.capacity = --this.length;
            return item;
        }
        ;
        remove(item) {
            console.log({ item, });
            for (let i = 0; i < this.length; i++) {
                if (this.items[i] === item) {
                    this.removeAt(i);
                    return true;
                }
                ;
            }
            ;
            console.log({ item, });
            return false;
        }
        ;
        indexOf(item) {
            for (let i = 0; i < this.length; i++)
                if (this.items[i] === item)
                    return i;
            return -1;
        }
        ;
        contains(item) {
            return this.indexOf(item) !== -1;
        }
        ;
        iterator() {
            return new ArrayIterator(this.items);
        }
        ;
        toString() {
            if (this.length === 0)
                return '[]';
            let result = '[';
            for (let i = 0; i < this.length - 1; i++) {
                result += this.items[i] + ', ';
            }
            ;
            result += this.items[this.length - 1] + ']';
            return result;
        }
        ;
    }
    ;
    const newArray = new MyArray(3);
    newArray.add(7);
    newArray.clear();
    newArray.add(2);
    newArray.add(5);
    newArray.add(15);
    newArray.set(1, 0);
    newArray.add(7);
    console.log(newArray.toString());
    newArray.removeAt(1);
    newArray.remove(7);
    console.log(newArray.toString());
    console.log(newArray.indexOf(2));
    console.log(newArray.contains(2));
    console.log(newArray.get(0));
    console.log(newArray.size());
})();
//# sourceMappingURL=index.js.map