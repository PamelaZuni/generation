//Exercise 3 - Utilizing if, else;

const read = require('readline-sync');

let name,age,firstDonation;

name = read.question('Digit your full name: ');
age = read.questionInt('Digit your age: ')
firstDonation = read.keyInYNStrict('Is it your first blood donation?');
console.log(`${firstDonation}`);

if(age >= 18 && age < 60){
  console.log(`Good news! ${name} you are allowed do donate blood!`);
}else if((age >= 60 && age <= 69) && (firstDonation === false)){;
console.log(`Good news! ${name} you are allowed to donate blood!`);
}else{
  console.log(`Sorry${name} you are not allowed to donate blood!`);
}
