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

function isValid(s: string): boolean {

    const stack: Array<string> = [];
    const characters: Record<string, string> = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < s.length; i++) {
        if (stack.length < 1) stack.push(s.charAt(i))
        else {
            if (characters[s.charAt(i)]) stack.push(s.charAt(i));
            else if (characters[stack[stack.length - 1]] === s.charAt(i)) stack.pop();
            else break;
        }
    }

    return stack.length > 0? false: true;
}

console.log(isValid('{({}({})[]({}))}()[]{}([])()[]{}()'));
// console.log(isValid('('));
console.log(isValid(']'));