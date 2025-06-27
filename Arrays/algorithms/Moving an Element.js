const numbers = [1, 2, 3, 4, 5];

function move(array, index, offset){
  array.splice(index, 1);
  array.splice(index + offset, 0, array[index]);
  return array;
}

const output = move(numbers, 0, 2);
console.log(output);