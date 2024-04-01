//Exercise 2 using loop while
const read = require('readline-sync');

let age = 0;
let counterYoungAge = 0 ;
let counterOldAge = 0;

while(age >= 0) {
  age = read.questionInt('Digit an age: ');

  if(age <= 21 && age > 0 ) {
    counterYoungAge++
  }
  if (age > 50) {
    counterOldAge++
  }  
}

console.log(`Total old people: ${counterYoungAge}`);
console.log(`Total young people: ${counterOldAge}`);
