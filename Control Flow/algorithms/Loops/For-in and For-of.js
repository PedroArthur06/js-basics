// for- in loop example
const person ={name: 'Peter', age: 18, city: 'Cuiabá'};
for (let key in person) {
  console.log(key,'=', person[key]);
}
console.log('=+'.repeat(8));

// for-of loop example
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}