// Are there duplicates using a frequency counter pattern
function areThereDuplicates() {
  const arr = [...arguments];

  if (arr.length === 0) return false;

  const frequencyCounter = {};

  for (let i = 0; i < arr.length; i++) {
    frequencyCounter[arr[i]] = (frequencyCounter[arr[i]] || 0) + 1;
  }

  for (const key in frequencyCounter) if (frequencyCounter[key] > 1) return true;
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // false
// --------------------------------------------------------------------------------
// Are there duplicates using a multiple pointers pattern
function areThereDuplicates2() {
  const arr = [...arguments];
  if (arr.length === 0) return false;

  arr.sort();

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      return true;
    }
    i++;
    j++;
  }
  return false;
}

console.log(areThereDuplicates2(1, 2, 3, 2)); // true
console.log(areThereDuplicates2("a", "b", "c", "a")); // true
console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2("a", "b", "c")); // false
console.log(areThereDuplicates2(1, 2, 3, 2));
console.log(areThereDuplicates2("a", "b", "c", "a"));
