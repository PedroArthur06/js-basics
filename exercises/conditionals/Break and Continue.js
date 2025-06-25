//Break statement example
let count = 0;
while (count < 10) {
  count++;
  if (count === 5) {
    break; 
  }
  console.log(count); 
}
console.log('-='.repeat(3));

//Continue statement example
let i = 0
while (i < 10) {
  i++;
  if (i === 5) {
    continue; 
  }
  console.log(i); 
}