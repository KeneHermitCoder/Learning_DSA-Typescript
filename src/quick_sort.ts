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

function longestCommonPrefix(strs: string[]): string {
    let existingPrefix = '';
    while (strs.length && !existingPrefix.length) {
        console.log(`${strs[strs.length - 1]}`)
        let longestString = strs[strs.length-1];
        if (strs.every(str => str.startsWith(longestString))) {
            existingPrefix = longestString;
            break;
        }
        strs[strs.length - 1] = longestString.slice(0, longestString.length - 1)
    }
    return existingPrefix;
}

(() => {

    const timeBeforeOperation = new Date();
    console.log('Before sorting...');
    console.log({
        'startTime': timeBeforeOperation,
        'startInterval': timeInterval(timeBeforeOperation, timeBeforeOperation, 'ms'),
        arrayToSort: ["flower", "flow", "flight"]
    });
    console.log('\nAfter sorting...');
    console.log({
        'timeInterval': timeInterval(timeBeforeOperation, new Date(), 'ms'),
        sortedArray: longestCommonPrefix([
            "flowering", "flows", "flight", "flighting", "flightless", "flights", 'fleet',
            'flew', 'flews', 'flewless', 'flewings', 'flewsing', 'flewings', 'flaw', 'flaws',
            'flawless', 'flawlessing', 'flawlessness', 'flawlessly', 'fluid', 'fluidity', 'fluidly',
            'flap', 'flaps', 'flapsing', 'flapsless', 'flapless', 'flapslessly', 'flapslessness',
            'flapping', 'flow', 'flowed', 'flowing', 'flowingly', 'flowless', 'flowlessly', 'flowlessness',
            'flame', 'flaming', 'flamingly', 'flamingness', 'flames', 'flamingly', 'flamingness',
            'flamingo', 'flank', 'flanked', 'flanking', 'flanked', 'flanked', 'flanked', 'flanked',
            'flanked', 'flanked', 'flanked', 'flanked', 'flanked', 'flanked', 'flanked', 'flanked',
            'fleet', 'fleeted', 'fleeting', 'fleetingly', 'fleetless', 'fleetlessly', 'fleetlessness',
            'flee', 'fleeing', 'fleeingly', 'fleeingness', 'flees', 'fleeingly', 'fleeingness',
            'fleeing', 'flees', 'fleeingly', 'fleeingness', 'flees', 'fleeingly', 'fleeingness',
            'flees', 'fleeingly', 'fleeingness', 'flees', 'fleeingly', 'fleeingness', 'flees',
            'fleeingly', 'fleeingness', 'flees', 'fleeingly', 'fleeingness', 'flees', 'fleeingly',
            'fleeingness', 'flees', 'fleeingly', 'fleeingness', 'flees', 'fleeingly', 'fleeingness',
        ])
    });
})()