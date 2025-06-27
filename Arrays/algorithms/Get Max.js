const numbers = [1, 2, 3, 4, 5];

function getMax(array){
  if (array.length === 0) return undefined; 

  return array.reduce((a, b) => (a > b) ? a : b);
}

const max = getMax([]);
console.log(max); 