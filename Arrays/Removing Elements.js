const number = [1, 2, 3, 4, 5];

// Remove the last element
const last = number.pop(); 

// Remove the first element
number.shift();

// Remove an element from the middle
number.splice(2, 1); 
console.log(number);