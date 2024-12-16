/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
* Input: nums = [2,7,11,15], target = 9
* Output: [0,1]
* Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
* 
* Example 2:
* Input: nums = [3,2,4], target = 6
* Output: [1,2]
* 
* Example 3:
* Input: nums = [3,3], target = 6
* Output: [0,1]
* 
* Constraints:
* 2 <= nums.length <= 10
* -109 <= nums[i] <= 10
* -109 <= target <= 109
* Only one valid answer exists.
 
 */

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