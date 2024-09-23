function naiveStringSearch(string, searchString) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < searchString.length; j++) {
      if (searchString[j] !== string[i + j]) break;
      // means that we match string
      if (j === searchString.length - 1) counter++;
    }
  }
  return counter;
}
console.log(naiveStringSearch("amrkkamr", "amr"));
