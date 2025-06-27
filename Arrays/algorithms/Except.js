const numbers = [1, 2, 3, 4, 5];

function exept(array, excluded) {
  return array.filter(item => {
    return !excluded.includes(item);
  });
}

const output = exept(numbers, [2, 4]);
console.log(output); 