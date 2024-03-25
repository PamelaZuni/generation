//Exercise 1

let salary;
let allowance;
let newSalary;


const read = require('readline-sync')

salary = read.questionFloat('Digit the salary: ');
allowance = read.questionFloat('/nDigit the allowance: ');

newSalary = (salary + allowance);
console.log(`The new salary is ${newSalary}.`)

//The new salary is 11000.00



