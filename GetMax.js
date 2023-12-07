//const numbers = [1, 2, 3, 4];
//const Max = getMax(numbers);

const numbers = [1, 2, 3, 4, 90];
/*const max = getMax(numbers);
console.log(max);
function getMax(array) {
  if (array.length === 0) return;
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}*/

//Using reduce method
const max = getMax(numbers);
console.log(max);
function getMax(array) {
  if (array.length === 0) return;
  return array.reduce((a, b) => (a > b ? a : b));
}
