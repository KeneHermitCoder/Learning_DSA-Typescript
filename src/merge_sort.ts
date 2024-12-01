import { timeInterval } from "./utils/timeInterval";

export class MergeSort<T> {

    public recursiveDepth = 0;

    public run(array: T[]): T[] {
        if (array.length < 2) return array;

        let [leftArray, rightArray] = this.split(array);
        leftArray = this.run(leftArray);
        this.recursiveDepth++;
        rightArray = this.run(rightArray);
        this.recursiveDepth++;

        return this.merge(leftArray, rightArray);
    }

    private split(array: T[]) {
        const midpoint = Math.floor(array.length / 2);
        const leftArray = array.slice(0, midpoint);
        const rightArray = array.slice(midpoint);
        return [leftArray, rightArray];
    }

    private merge(leftArray: Array<T>, rightArray: Array<T>): Array<T> {
        let i = 0, j = 0, k = 0;
        const array: T[] = [];
        while (i < leftArray.length && j < rightArray.length) {
            // if (leftArray[i] > rightArray[j]) {
            if (leftArray[i] < rightArray[j]) {
                // array[k] = leftArray[i];
                array.push(leftArray[i]);
                i++;
                // k++;
            } else {
                // array[k] = rightArray[j];
                array.push(rightArray[j]);
                j++;
                // k++;
            }
        }

    
        while (i < leftArray.length) {
            array[k] = leftArray[i];
            // array.push(leftArray[i]);
            i++;
            // k++;
        }
        while (j < rightArray.length) {
            // array[k] = rightArray[j];
            array.push(rightArray[j]);
            j++;
            // k++;
        }

        return array;
    }
}


const arrayToSort = new Array(500000);
for (let i = 0; i < arrayToSort.length; i++)
    arrayToSort[i] = Math.ceil(Math.random() * arrayToSort.length);
console.log('log2(array.length): ', Math.log2(arrayToSort.length));
console.log('array.length * log2(array length): ', arrayToSort.length * Math.log2(arrayToSort.length));

(() => {
    // using my merge sort
    const timeBeforeSort = new Date();
    console.log('Before merge_sort sorting...');
    console.log({
        'startTime': timeBeforeSort,
        'startInterval': timeInterval(timeBeforeSort, timeBeforeSort, 's'),
        arrayToSort
    });

    const mergeSort = new MergeSort();
    const mergeSortedArray = mergeSort.run(arrayToSort);
    console.log('\nAfter merge_sort sorting...');
    console.log({
        'recursiveDepth': mergeSort.recursiveDepth,
        'timeInterval': timeInterval(timeBeforeSort, new Date(), 's'),
        sortedArray: mergeSortedArray
    });
})();


(() => {
    // Using the array built-in sort m
    const timeBeforeSort = new Date();
    console.log('\n\nBefore built-in sorting...'); 
    console.log({
        'startTime': timeBeforeSort,
        'startInterval': timeInterval(timeBeforeSort, timeBeforeSort, 's'),
        arrayToSort
    });
    arrayToSort.sort((a, b) => a - b);
    console.log('\n\nAfter built-in sorting...\n');
    console.log({
        'timeInterval': timeInterval(timeBeforeSort, new Date(), 's'),
        sortedArray: arrayToSort,
    });
})();
