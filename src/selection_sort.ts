import { timeInterval } from "./utils/timeInterval";

class SelectionSort<T> {

    public run(unsortedArray: Array<number>) {
        const sortedArray: Array<number> = [];
        while (unsortedArray.length > 0) {
            const minIndex = this.indexOfMinElem(unsortedArray);
            const removedElem = unsortedArray.splice(minIndex, 1)[0];
            sortedArray.push(removedElem);
        }
        return sortedArray;
    }

    private indexOfMinElem(array: number[]): number {
        let minIndex = 0;
        for (let i = 1; i < array.length; i++)
            if (array[minIndex] > array[i]) minIndex = i;
        return minIndex;
    }
}



(() => {
    const arrayToSort = new Array(100);
    for (let i = 0; i < arrayToSort.length; i++)
        arrayToSort[i] = Math.ceil(Math.random() * arrayToSort.length);

    const timeBeforeSort = new Date();
    console.log('Before sorting...');
    console.log({
        'startTime': timeBeforeSort,
        'startInterval': timeInterval(timeBeforeSort, timeBeforeSort, 'ms'),
        arrayToSort
    });

    const selectionSort = new SelectionSort();
    const sortedArray = selectionSort.run(arrayToSort);
    console.log('\nAfter sorting...');
    console.log({
        'timeInterval': timeInterval(timeBeforeSort, new Date(), 'ms'),
        sortedArray: sortedArray
    });
})();