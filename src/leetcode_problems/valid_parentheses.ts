/**
 * https://leetcode.com/problems/valid-parentheses/
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *    Open brackets must be closed by the same type of brackets.
 *    Open brackets must be closed in the correct order.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * 
 * Example 4:
 * Input: s = "([])"
 * Output: true
 * 
 * Constraints:
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 */


import { timeInterval, } from '../utils/timeInterval';

// function isValid(s: string): boolean {
function isValid(s: string): void {
    const stack = [s.charAt(0)];

    const characters = new Map([['(', ')'], ['[', ']'], ['{', '}']]);
    // characters.set('rightFacing', ['(', '[', '{',]);
    // characters.set('leftFacing', [')', ']', '}',]);
    console.log({ characters, },);
    console.log(characters.get('['));
    // while (s.length) {
    //     if (characters.keys())
    // }
}

isValid('Hello')