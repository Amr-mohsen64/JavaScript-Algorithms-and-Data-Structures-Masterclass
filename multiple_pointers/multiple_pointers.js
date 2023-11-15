/**
 * function called sumZero which accepted sorted array of integers
 * the function should find first pair where sum is zero, return array that includes
 * values that some equals to zero or undefined if a pair doesn't exist
 * we uses here multiple pointers pattern
 * time complexity is o(n)
 */

function someZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(someZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
