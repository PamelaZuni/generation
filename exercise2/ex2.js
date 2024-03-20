//Exercise 2

let score1;
let score2;
let score3;
let score4;
let avarageScore;

const read = require('readline-sync')

score1 = read.questionFloat('Digit the score 1: ');10
score2 = read.questionFloat('/nDigit the score 2: ');
score3 = read.questionFloat('/nDigit the score 3: ');
score4 = read.questionFloat('/nDigit the score 4: ');

averageScore = (score1 + score2 + score3 + score4)/4;
console.log(`The average test score is ${averageScore}`);

//The average test score is 8.1