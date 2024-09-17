// write a function that returns true if there is a pair of values in the array where the values add up to the average of the entire array. Otherwise, return false.
function averagePair(arr, avg) {
  if (!arr.length) return false;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;

    if (average === avg) return true;
    else if (average > avg) right--;
    else left++;
  }

  return false;
}
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
