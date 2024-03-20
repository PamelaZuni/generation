// Exercise 4

const read = require('readline-sync');

let n1;
let n2;
let n3;
let n4;
let result;

n1 = read.questionFloat('Digit the number 1 : ');
n2 = read.questionFloat('\nDigit the number 2 : ');
n3 = read.questionFloat('\nDigit the number 3 : ');
n4 = read.questionFloat('\nDigit the number 4 : ');



result = (n1 * n2) - (n3 * n4);

console.log(`The difference between number 1 and 2 to number 3 and 4 is ${result}`);

//The differnce between number 1 and 2 to number 3 and 4 is -26

