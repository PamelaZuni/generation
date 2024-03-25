//Exercise utilizing Switch
const read = require('readline-sync');

let number1 , number2 , operator

console.log('Code and Operation');
console.log('1 --- Sum');
console.log('2 --- Subtraction');
console.log('3 --- Multiplication');
console.log('4 ---Division')


number1 = read.questionFloat('Digit the first number: ');
number2 = read.questionFloat('Digit the second number: ');
operator = read.questionInt('Operator: ')


switch (operator) {
  case 1:
    console.log((number1 + number2).toFixed(2));
    break;
  case 2:    
  console.log((number1 - number2).toFixed(2));
    break;
  case 3:
    console.log((number1 * number2).toFixed(2)); 
    break;
  case 4:
    console.log((number1 / number2).toFixed(2)); 
  break;
  default:
    console.log('Please digit a valid number!');
}