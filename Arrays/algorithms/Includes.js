function includes(array, searchElement) {
  if (array == null) {
    return false;
  }

  const arr = Array.isArray(array) ? array : Array.from(array);

  return arr.includes(searchElement);
}

const numbers = [1, 2, 3, 4, 5];
console.log(includes(numbers, 3));