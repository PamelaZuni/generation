 //Exercise 1 using the loop for;

const read = require('readline-sync');

let num1, num2;

 num1 = read.questionInt('\nDigit the first number in the range: ');
 num2 = read.questionInt('\nDigit the last number in the range: ');


 if (num1 > num2) { 
 console.log('The range number is invalid!');
 } else {
  console.log(`\nIn the range of ${num1} and ${num2}:`)
  for(let i = num1; i <= num2; i++) {//less or equal to this number
    if (i % 3 == 0 && i % 5 == 0) { 
      console.log(`${i} is multiple of 3 and 5`)
    }
  }
 }



/* Output

Digit the first number in the range: 10

Digit the last number in the range: 100

In the range of 10 and 100:
15 is multiple of 3 and 5
30 is multiple of 3 and 5
45 is multiple of 3 and 5
60 is multiple of 3 and 5
75 is multiple of 3 and 5
90 is multiple of 3 and 5
*/