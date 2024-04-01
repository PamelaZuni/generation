//Exercise 1 using Conditional Statement if

const read = require('readline-sync');

let a;
let b;
let c;

a = read.questionInt('Digit the number A: ', {limitMessage: 'Digite a valid number'});
b = read.questionInt('\nDigit the number B: ', {limitMessage: 'Digite a valid number'});
c = read.questionInt('\nDigit the number C: ', {limitMessage: 'Digite a valid number'});

if((a + b) > c){
  console.log('The sum of A + B is bigger than C');
}else if((a + b) < c){
  console.log('\nThe sum of A + B is smaller than C');
}else if((a + b) === c){
  console.log('\nThe sum of A + B is same than c');
//}else{
//  console.log('\nThe sum of A + B is same than C');
}

// Output
// 4 + 2 = 6 > 5 ('The sum of A + B is bigger than C')
// 2 + 2 = 4 < 5 ('The sum of A + B is smaller than C')
// 2 + 2 = 4 = 4 ('The sum of A + B is same than C') 