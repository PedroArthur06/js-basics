const numbers = [1, 2, 3, 4, 5, 1];

function countOccurrences(array, searchElement) {
  let count = 0;
  for (let element of array) {
    if (element === searchElement) {
      count++;
    }
    return count;
  }
}

const output = countOccurrences(numbers, 1);
console.log(output); 