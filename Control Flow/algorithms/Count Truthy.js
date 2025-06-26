const array = [1, 0, 'hello', '', null, undefined, true, false];
console.log(countTruthy(array)); 

function countTruthy(array){
  let count = 0;
  for (let value of array) {
    if (value) {
      count++;
    }
  }
  return count;
}