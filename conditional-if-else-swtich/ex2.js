 // Exercise 2 - Utilizing if , else if



const read = require('readline-sync');

let selectedNumber;


selectedNumber = read.questionInt('\nDigit a number: ');



if (selectedNumber % 2 === 0 && selectedNumber >= 0 ) {
  console.log(`The number ${selectedNumber} is even and positive`)
}else if (selectedNumber % 2 === 0 && selectedNumber < 0 ){
    console.log(`The number ${selectedNumber} is even and negative`)
}else if(selectedNumber % 2 === 1 && selectedNumber >= 1){
  console.log(`The number ${selectedNumber} is odd and positive`);
}else{
  console.log(`The number ${selectedNumber} is odd and negative`);
}



