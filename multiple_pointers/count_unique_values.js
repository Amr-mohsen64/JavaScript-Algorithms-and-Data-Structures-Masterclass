/**
 * function that takes a sorted array and counts the unique values the array,
 *  there can be negative values in the array, but it always sorted
 */

function countUniqueValues(arr) {
  let i = 0;
  if (arr.length === 0) return 0;

  for (j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

/**
 * move i and j pointers
 * if the element in iteration not equal to next element then  move  first the pointer
 *     i
 * [1, 1, 1, 2, 3, 3, 4, 4, 5, 6]
 *           j
 *         i
 *  [1, 2, 1, 2, 3, 3, 4, 4, 5, 6]
 *               j
 */
console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));
