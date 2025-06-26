function sum(limit){
  let multiplesOf3 = 0;
  let multiplesOf5 = 0;
  let totalSum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0) {
        multiplesOf3 += i;
      }
      if (i % 5 === 0) {
        multiplesOf5 += i;
      }
    }
  }
  totalSum = multiplesOf3 + multiplesOf5;
  console.log(`Sum of multiples of 3 below ${limit} is: ${multiplesOf3}`);
  console.log(`Sum of multiples of 5 below ${limit} is: ${multiplesOf5}`);
  console.log(`Total sum of multiples of 3 and 5 below ${limit} is: ${totalSum}`);
}

console.log(sum(10)); 