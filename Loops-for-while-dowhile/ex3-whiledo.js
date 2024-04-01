//Exercise 3 using while-do

const read = require('readline-sync');

let number = 0 ;
let sum = 0;

do {
  number = read.questionInt('Digit a number: ')
  if (number >= 0){
    sum += number;  
  }

} while(number !=0);
console.log(`The sum of positive numbers is: ${sum}`);







