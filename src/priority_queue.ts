
/**
 * A min priority queue implementation using a binary heap.
 * A min heap is a binary tree where the value of each node is less than or equal to the values of its children.
 * A max heap is a binary tree where the value of each node is greater than or equal to the values of its children.
 * @author Kene Nnakwue - (https://github.com/KeneHermitCoder)
 */

// export class PriorityQueue<T extends Comparable<T>> {
export class PriorityQueue<T> {

    // The number of elements currently in the heap
    private heapSize: number = 0;
    // The internal capacity of the heap
    private capacity: number = 0;
    // An array to track the elements/nodes in the heap
    private heap: T[] = [];

    // This map keeps track of the possible indices a particular node value is found in the heap.
    // Having this mapping lets us have O(log(n)) removals and O(1) element containment check at
    // the cost of some additional space O(n) and minor memory overhead.
    private map: Map<T, Set<number>> = new Map();

    // construct an optionally empty or initially sized heap
    // constructor(heapSize?: number) {
    //     if (heapSize) {
    //         if (heapSize < 0) throw new Error('Capacity must be greater than 0');
    //         this.heap = new Array(heapSize);
    //     };
    // };

    // Construct a priority queue using heapify method
    // constructor(array: T[]) {
    //     this.heapSize = this.capacity = array.length;
    //     this.heap = new Array(this.capacity);

    //     // Place all elements in the heap
    //     for (let i = 0; i < this.heapSize.i++ ) {
    //         this.mapAdd(array[i], i);
    //         this.heap.push(array[i]);
    //     };

    //     // The heapify process - O(n)
    //     for (let i = Math.floor(this.heapSize / 2) - 1; i >= 0; i--) {
    //         this.sink(i);
    //     };
    // };

    // Construct a priority queue 
    constructor(...items: T[]) {
        for (const element of items) this.add(element);
    };

    // Get the size of the queue - O(1)
    public size(): number { return this.heapSize; };

    // Check if the queue is empty - O(1)
    public isEmpty(): boolean { return this.heapSize === 0; };

    // Add an element to the queue - O(n)
    public clear(): void {
        // remove all elements from the queue
        for (let i = 0; i < this.capacity; i++) this.heap[i] = null!;
        this.heapSize = 0;
        this.map.clear();
    };

    // Peek at the first item in the queue - O(1)
    public peek(): T | null { return this.isEmpty() ? null : this.heap[0]; };

    // Add an element to the queue - O(n)
    public add(element: T): void {
        if (element === null) throw new Error('Element cannot be null');
        if (this.heapSize < this.capacity) this.heap[this.heapSize] = element;
        else {
            this.heap.push(element);
            this.capacity++;
        };
        this.mapAdd(element, this.heapSize);
        this.swim(this.heapSize - 1);
        this.heapSize++;
    };

    // Remove an element from the queue - O(log(n))
    public poll(): T {
        if (this.isEmpty()) throw new Error('Queue is empty');
        return this.removeAt(0);
    };

    // Check if an element is in the queue
    public contains(element: T): boolean {
        // Map lookup to check if the element is in the heap - O(1)
        if (element === null) return false;
        return this.map.has(element);

        // Linear scan to check if the element is in the heap - O(n)
        // for (let i = 0; i < this.heapSize; i++) {
        //     if (this.heap[i] === element) return true;
        // };
        // return false;
    };

    // Test if the first element is greater than or equal(<=) to the second element,
    // assuming that i and j are valid indices - O(1)
    private less(i: number, j: number): boolean {
        return this.heap[i] < this.heap[j];
    };

    private swim(i: number): void {
        // Grab the index of the next parent node with respect to k - O(1)
        let parent = Math.floor((i - 1) / 2);

        // keep swimming/bubbling up while the parent is greater than the current node, and the
        // current node is not the root
        while (i > 0 && this.less(i, parent)) {
            // swap the current node with its parent
            this.swap(i, parent);
            i = parent;

            // Grab the index of the next parent node with respect to k - O(1)
            parent = Math.floor((i - 1) / 2);
        };
    };

    private sink(i: number): void {
        while (true) {
            let left = 2 * i + 1;   // left child node
            let right = 2 * i + 2;  // right child node
            let min = left;            // assume the current node is the smallest

            // check if the left child is smaller than the current node; if the right child is
            // smaller, update min to be the right child
            if (right < this.heapSize && this.less(right, left)) min = right;

            // Stop if we're outside the bounds of the heap, or stop early if we cannot sink anymore
            // if (left >= this.heapSize || this.less(min, i)) break;
            if (left >= this.heapSize || !this.less(min, i)) break;

            // Move down the heap to the smallest child
            this.swap(min, i);
            i = min;
        };
    };

    //
    private swap(i: number, j: number): void {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;

        this.mapSwap(this.heap[i], this.heap[j], i, j);
    };

    //
    public remove(element: T): boolean {
        if (element === null) throw new Error('Element cannot be null');

        // Linear removal via search - O(n)
        // for (let i = 0; i < this.heapSize; i++) {
        //     if (this.heap[i] === element) {
        //     this.removeAt(i);
        //     return true;
        // };
        // return null;
    
        // Logarithmic removal via map lookup - O(1)
        const index = this.mapGet(element);
        if (index !== null) this.removeAt(index);
        return index !== null;
    };

    private removeAt(index: number): T {
        if (this.isEmpty()) throw new Error('Queue is empty');

        this.heapSize--;
        const removed_data = this.heap[index];

        // Obliterate the value in the map - O(1)
        this.heap[index] = null!;
        this.mapRemove(removed_data, this.heapSize);

        // Removed last element
        if (index === this.heapSize) return removed_data;

        const element: T = this.heap[this.heapSize];

        // Try sinking first
        this.sink(index);

        // If sinking fails, try swimming
        // if (this.less(this.heapSize, index)) this.swim(index);
        if (this.heap[index] === element) this.swim(index);

        return removed_data;
    };

    private isMinHeap(k: number): boolean {
        // If we're outside the bounds of the heap, return true
        if (k >= this.heapSize) return true;

        let left = 2 * k + 1;
        let right = 2 * k + 2;

        // Ensure that the current node at k is smaller than both its children left, and right
        // if they exist return false, otherwise indicate that the heap is invalid
        if (left < this.heapSize && !this.less(k, left)) return false;
        if (right < this.heapSize && !this.less(k, right)) return false;

        // Recurse on both the left and right children to check if they are also valid heaps
        return this.isMinHeap(left) && this.isMinHeap(right);
    };

    private mapAdd(element: T, index: number): void {
        let set = <Set<any>>this.map.get(element);

        if (set === null || set === undefined) {
            set = new Set<T>();
            set.add(index);
            this.map.set(element, set);
        } else set.add(index);
    };

    private mapRemove(element: T, index: number): void {
        const set = <Set<any>>this.map.get(element);
        console.log({ set, })
        if (set !== null && set !== undefined) set.delete(index);
        if (set?.size === 0) this.map.delete(element);
    };

    private mapGet(element: T): number | null {
        const set = <Set<any>>this.map.get(element);
        if (set !== null) return set.values().next().value;
        return null;
    };

    private mapSwap(element1: T, element2: T, index1: number, index2: number): void {
        this.mapRemove(element1, index1);
        this.mapRemove(element2, index2);
        this.mapAdd(element1, index2);
        this.mapAdd(element2, index1);
    };
};