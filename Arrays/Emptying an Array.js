let numbers = [1, 2, 3, 4, 5];
let another = numbers;

//solution 1
numbers = [];

//solution 2
another.length = 0;

//solution 3
numbers.splice(0, numbers.length);

//solution 4
while (numbers.length > 0) {
  numbers.pop();
}