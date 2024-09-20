function collectOdds(arr) {
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5])); // [1, 3, 5]

// slice method os method that returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).