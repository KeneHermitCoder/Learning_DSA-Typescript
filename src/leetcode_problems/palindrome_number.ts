// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?


function palindrome(x: number): boolean {
    if (x < 9 && x > -9) return false;
    let convertedNumber = x.toString();
    console.log({ convertedNumber, })
    const stringLength = x.length;
    if ((stringLength)%2 === 0) {
        if (x.slice(0, (stringLength/2)).split().reverse() !== x.slice((stringLength/2) -1, stringLength)
    } else {}
    return true;
}


console.log(palindrome(41));