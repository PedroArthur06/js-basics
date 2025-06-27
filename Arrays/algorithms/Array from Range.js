function arrayFromRange(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

const numbers = arrayFromRange(1, 5);
console.log(numbers); 