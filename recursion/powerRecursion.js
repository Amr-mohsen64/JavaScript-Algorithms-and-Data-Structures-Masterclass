function pow(num, power) {
  if (power === 0) return 1;
  if (power === 1) return num;
  return num * pow(num, power - 1);
}

console.log(pow(2, 0));

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
