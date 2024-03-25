//Exercise 3

let glossSalary;
let nightTimeAdittional;
let overtime;
let discounts;
let netSalary;

const read = require('readline-sync')

glossSalary = read.questionFloat('Digit the salary after taxes: ');
nightTimeAdittional = read.questionFloat('\nDigit the night bonus: ');
overtime = read.questionFloat('\nDigit the overtime: ');
discounts = read.questionFloat('\nDigit the discounts: ');

netSalary = glossSalary + nightTimeAdittional + (overtime * 5) - discounts
console.log(`The salary is ${netSalary}`);

//The salary is 2800.00