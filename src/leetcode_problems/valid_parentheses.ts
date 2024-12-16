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
    const characters = new Map([['(', ')'], ['[', ']'], ['{', '}']]); 

    while (s.length) {
        const stringFirstCharacter = s.charAt(0);
        s = s.slice(1);
        if (stack.length === 0) {
            if (!characters.has(stringFirstCharacter)) break;
            else stack.push(stringFirstCharacter)
        } else {
            if (characters.has(stringFirstCharacter)) stack.push(stringFirstCharacter);
            else if (characters.get(stack[stack.length - 1]) === stringFirstCharacter) stack.pop()
            else break;
        }
    }

    return stack.length > 0? false: true;
}

console.log(isValid('{({}({})[]({}))}()[]{}([])()[]{}()'));