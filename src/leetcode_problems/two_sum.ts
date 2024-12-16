import { timeInterval } from "../utils/timeInterval";

function twoSum(nums: number[], target: number): number[] {
    // const twoSumArray = [];
    // let i = 0, j = 1;
    // while(i < nums.length) {
    //     while(j < nums.length) {
    //         if (nums[i] + nums[j] === target) {
    //             twoSumArray[0] = i;
    //             twoSumArray[1] = j;
    //             break;
    //         };
    //         j++;
    //     }
    //     i++;
    //     j = i + 1;
    // }
    // return twoSumArray;

    const numMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) return [numMap.get(complement)!, i];
        numMap.set(nums[i], i);
    }
    return [];
}

(() => {
    const array = new Array(100).fill(0).map(() => Math.floor(Math.random() * 100));
    const numberToFind = Math.floor(Math.random() * 100);
    const timeBeforeOperation = new Date();
    console.log('Before operation...');
    console.log({
        'startTime': timeBeforeOperation,
        'startInterval': timeInterval(timeBeforeOperation, timeBeforeOperation, 'ms'),
        array,
        numberToFind,
    });
    console.log('\nAfter operation...');
    console.log({
        'timeInterval': timeInterval(timeBeforeOperation, new Date(), 'ms'),
        result: twoSum(array, numberToFind),
    });
})();