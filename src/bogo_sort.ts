import { timeInterval } from "./utils/timeInterval";

class BogoSort {

    public run<T>(array: T[]): T[] {
        let attempts = 0;
        while (!this.isSorted(array)) {
            array = this.shuffle(array);
        }
        return array;
    }

    private isSorted<T>(array: T[]): boolean {
        for (let i = 0; i < array.length - 1; i++)
            if (array[i] > array[i + 1]) return false;
        return true;
    }

    private shuffle<T>(array: T[]): T[] {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

}




(() => {
    const arrayToSort = new Array(11);
    for (let i = 0; i < arrayToSort.length; i++)
        arrayToSort[i] = Math.ceil(Math.random() * arrayToSort.length);

    const timeBeforeSort = new Date();
    console.log('Before sorting...');
    console.log({
        'startTime': timeBeforeSort,
        'startInterval': timeInterval(timeBeforeSort, timeBeforeSort, 'ms'),
        arrayToSort
    });

    const bogoSort = new BogoSort();
    const sortedArray = bogoSort.run(arrayToSort);
    console.log('\nAfter sorting...');
    console.log({
        'timeInterval': timeInterval(timeBeforeSort, new Date(), 'ms'),
        sortedArray: sortedArray
    });
})();