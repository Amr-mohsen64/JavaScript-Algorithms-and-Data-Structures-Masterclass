/**
 * function that compares the frequency of two arrays are the same
 */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    // check if the key in frequencyCounter2 is d3f el key fe frequencyCounter1
    if (!(key ** 2) in frequencyCounter2) return false;

    //if the value of each object repeated the same frequency
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
