/**
 * https://leetcode.com/problems/palindrome-number/
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * 
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 * 
 * Constraints:
 * -231 <= x <= 231 - 1
 * 
 * Follow up: Could you solve it without converting the integer to a string?
 */


function isPalindrome(x: number): boolean {
    // if (x >= 0 && x < 10) return true;
    // else if (x < 0) return false;
    // let convertedNumber = x.toString();
    // const midpoint = Math.floor(convertedNumber.length/2);
    // const firstHalf = convertedNumber.slice(0, midpoint+(convertedNumber.length%2 === 0? 0: 1)),
    //       secondHalf = convertedNumber.slice(midpoint)
    // if (firstHalf.split('').reverse().join('') === secondHalf) return true;
    // return false;

    const originalX = x;
    let reversedX = 0;
    while (x > 0) {
        reversedX = reversedX * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return reversedX === originalX;
}


console.log(isPalindrome(3));