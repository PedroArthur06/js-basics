function fizzBuzz(input){
  if (typeof input !== 'number' || input <= 0) {

  } else if(input % 3 === 0 && input % 5 === 0){
    console.log('FizzBuzz');

  } else if(input % 3 === 0){
    console.log('Fizz');

  } else if(input % 5 === 0){
    console.log('Buzz');

  } else if (input % 3 !== 0 && input % 5 !== 0) {
    console.log(i);

  }else {
    console.log('not a number');
  }

  }

const input = fizzBuzz(15)
console.log(input);