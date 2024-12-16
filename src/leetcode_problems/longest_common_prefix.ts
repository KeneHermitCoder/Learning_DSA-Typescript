/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * Constraints:
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lower-case English letters.
 */


import { timeInterval, } from '../utils/timeInterval';

function longestCommonPrefix(strs: string[]): string {
    let existingPrefix = '';
    while (strs.length && !existingPrefix.length) {
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
    const array = [
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
    ]
    const timeBeforeOperation = new Date();
    console.log('Before operation...');
    console.log({
        'startTime': timeBeforeOperation,
        'startInterval': timeInterval(timeBeforeOperation, timeBeforeOperation, 'ms'),
        array,
    });
    console.log('\nAfter operation...');
    console.log({
        'timeInterval': timeInterval(timeBeforeOperation, new Date(), 'ms'),
        sortedArray: longestCommonPrefix(array)
    });
})();