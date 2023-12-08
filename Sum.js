function sum(a, b) {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
//----------------using rest operator
function sum1(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum1(1, 2, 3, 4, 5, 8));
