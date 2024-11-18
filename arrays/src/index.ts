(() => {
    console.log('\nLearning DSA - Arrays\n');

    interface IteratorResult<T> {
        value: T;
        done: boolean;
    };

    class ArrayIterator<T> implements Iterator<T> {
        private index: number;
        private array: T[];

        constructor(array: T[]) {
            this.index = 0;
            this.array = array;
        }


        public next(): IteratorResult<T> | { value: never, done: true } {
            if (this.index >= this.array.length) {
                return { value: undefined as never, done: true };
            }

            const value = this.array[this.index];
            this.index++;
            return { value, done: false };
        }
    };


    class MyArray<T> {
        private items: T[];
        private length: number = 0;     // the length the user sees
        private capacity: number = 0;   // the length the array actually is

        constructor(capacity: number) {
            if (capacity < 0) throw new Error('Capacity must be greater than 0');
            this.capacity = capacity;
            this.items = new Array(capacity);
        };

        public size(): number {
            return this.length;
        };

        public isEmpty(): boolean {
            return this.length === 0;
        };

        public get(index: number): T {
            if (index < 0 || index >= this.capacity) throw new Error('Index out of bounds');
            return this.items[index];
        };

        public set(index: number, item: T): void {
            if (index < 0 || index >= this.capacity) throw new Error('Index out of bounds');
            this.items[index] = item;
        };

        public clear(): void {
            for (let i = 0; i < this.capacity; i++) {
                (<Array<T | null>>this.items)[i] = null;
            };
            this.length = 0;
        };

        public add(item: T): void {
            if (this.length + 1 >= this.capacity) {
                if (this.capacity === 0) this.capacity = 1;
                else {
                    this.capacity *= 2;
                    const new_items = new Array(this.capacity);
                    for (let i = 0; i < this.length; i++) {
                        new_items[i] = this.items[i];
                    };
                }
            }
            this.items[this.length++] = item;
        };

        public removeAt(rm_index: number): T {
            if (rm_index < 0 || rm_index >= this.length) throw new Error('Index out of bounds');
            const item = this.items[rm_index];
            const new_items = new Array(this.length - 1);
            let i = 0, j = 0;
            for (; i < this.length; i++, j++){
                if (i === rm_index) j--;
                else new_items[i] = this.items[i];}
            this.items = new_items;
            this.capacity = --this.length;
            return item;
        };

        public remove(item: T): boolean {
            console.log({ item, });
            for (let i = 0; i < this.length; i++) {
                if (this.items[i] === item) {
                    this.removeAt(i);
                    return true;
                };
            };
            console.log({ item, });
            return false;
        };

        public indexOf(item: T): number {
            for (let i = 0; i < this.length; i++)
                if (this.items[i] === item) return i;
            return -1;
        };

        public contains(item: T): boolean {
            return this.indexOf(item) !== -1;
        };

        public iterator(): Iterator<T> {
            return new ArrayIterator(this.items);
        };

        public toString(): string {
            if (this.length === 0) return '[]';
            let result = '[';
            for (let i = 0; i < this.length - 1; i++) {
                result += this.items[i] + ', ';
            };
            result += this.items[this.length - 1] + ']';
            return result;
        };

    };


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

    console.log('\nLearning DSA - Arrays\n');
})();