/**
  we have to use frequency counter pattern
* function that takes a two strings and determine if the second string is anagram with first string
 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (const char of str1) {
    // if letter exist ,increment otherwise set to 1
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  console.log(lookup);

  for (const char of str2) {
    // cant find a letter or letter is zero so it's not anagram
    if (!lookup[char]) return false;
    else lookup[char] -= 1;
  }

  return true;
}

//  {a: 1,m: 1,r: 1,s: 1}
/*
`m` exist then m = 0
`a` exist then a = 0
`r` exist then r = 0
`m` not exist then return false
*/
//  {a: 0,m: 0,r: 0,s: 1}

console.log(validAnagram("amrs", "marm"));
