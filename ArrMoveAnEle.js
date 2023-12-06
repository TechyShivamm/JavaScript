const numbers = [1, 2, 3, 4];
const output = move(numbers, 1, 2);
console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.lenght || position < 0) {
    console.error("Invalid offset");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0]; //remove one item
  console.log(element);
  output.splice(position, 0, element);
  console.log(output);
  return output;
}
