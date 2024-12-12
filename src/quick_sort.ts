import { timeInterval, } from './utils/timeInterval';

class QuickSort {

    public run(array: number[]): number[] {
        if (array.length < 2) return array;
        const pivot = array[0];
        const [lessThanPivot, greaterThanPivot] = this.partition(array, pivot);
        return this.run(lessThanPivot).concat([pivot]).concat(this.run(greaterThanPivot));
    }

    private partition(array: number[], pivot: number): number[][] {
        let lessThanPivot = [], greaterThanPivot = [];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) lessThanPivot.push(array[i]);
            else greaterThanPivot.push(array[i]);
        }
        return [lessThanPivot, greaterThanPivot];
    }

}



(() => {
    const arrayToSort = new Array(50);
    for (let i = 0; i < arrayToSort.length; i++)
        arrayToSort[i] = Math.ceil(Math.random() * arrayToSort.length);

    const timeBeforeSort = new Date();
    console.log('Before sorting...');
    console.log({
        'startTime': timeBeforeSort,
        'startInterval': timeInterval(timeBeforeSort, timeBeforeSort, 'ms'),
        arrayToSort
    });

    const quickSort = new QuickSort();
    const sortedArray = quickSort.run(arrayToSort);
    console.log('\nAfter sorting...');
    console.log({
        'timeInterval': timeInterval(timeBeforeSort, new Date(), 'ms'),
        sortedArray: sortedArray
    });
})();