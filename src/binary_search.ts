import { verifyIndex, } from "./utils/verify_index";

/**
 * 
 * @param array - The array to search
 * @param target - The target to search for
 * @returns The index position of the target if found, otherwise null
 */
function binarySearch(array: number[], target: number): number {
    console.log(`Started running a binary search for ${target}...`)
    let first = 0;
    let last = array.length - 1;

    while (first <= last) {
        const midpoint = Math.floor((first + last) / 2);
        if (array[midpoint] === target) return midpoint;
        else if (midpoint > target) last = midpoint -1;
        else first = midpoint + 1;
    }
    return -1;
}

function recursiveBinarySearch(array: number[], target: number): boolean {
    if (array.length < 1) {
        console.log(`Started running a recursive binary search for ${target}...`)
        console.log('Found target in the recursive search? ')
        return false
    }
    else {
        const midpoint = Math.floor(array.length/2);
        if (array[midpoint] === target) {
            console.log(`Started running a recursive binary search for ${target}...`)
            console.log('Found target in the recursive search? ')
            return true
        } else
            if (midpoint > target)
                return recursiveBinarySearch(array.slice(0, midpoint), target);
            else return recursiveBinarySearch(array.slice(midpoint+1), target)
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
verifyIndex(binarySearch(numbers, 12));
verifyIndex(binarySearch(numbers, 6));
console.log(recursiveBinarySearch(numbers, 12))
console.log(recursiveBinarySearch(numbers, 6))