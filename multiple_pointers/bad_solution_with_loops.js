/**
 * function called sumZero which accepted sorted array of integers
 * the function should find first pair where sum is zero, return array that includes
 * values that some equals to zero or undefined if a pair doesn't exist
 *  we uses here nested loops
 * time complexity is o(n^2)
 */

function someZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

console.log(someZero([-4, -3, -2, -1, 0, 1, 2, 5]));
