// for- in loop example
const person ={name: 'Peter', age: 18, city: 'Cuiabá'};

for (let key in person) {
  console.log(key,'=', person[key]);
}
console.log('=+'.repeat(8));

// for-of loop example
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}