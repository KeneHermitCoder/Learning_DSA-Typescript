import { verifyIndex, } from "./utils/verify_index";

/**
 * 
 * @param array - The array to search
 * @param target - The target to search for
 * @returns The index position of the target if found, otherwise -1
 */
function linearSearch<T>(array: T[], target: T): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
verifyIndex(linearSearch(numbers, 12));
verifyIndex(linearSearch(numbers, 6));