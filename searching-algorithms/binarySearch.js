function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.round((left + right) / 2);

  while (arr[middle] !== value && left <= right) {
    if (value < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.round((left + right) / 2);
  }

  return arr[middle] === value ? middle : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
