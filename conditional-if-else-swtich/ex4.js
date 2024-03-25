//Exercise 4 utilizing Switch Case

const read = require('readline-sync');

let productCode, quantity;


console.log('1 -- hot dog --- R$10,00');
console.log('2 -- x-salada --- R$15,00');
console.log('3 -- X-Bacon --- R$18,00');
console.log('4 -- Bauru --- R$12,00');
console.log('5 -- Refrigerante --- R$8,00');
console.log('6 -- Orange Juice --- R$13,00');


productCode = read.question('Product Code: ');
quantity = read.question('Quantity: ');


switch (productCode) {
  case '1':
    console.log(`Total: R$${(10.00 * quantity).toFixed(2)}`);
    break;
  case '2':
    console.log(`Total: R$${(15.00 * quantity).toFixed(2)}`);
    break;
  case '3':
    console.log(`Total: R$${(18.00 * quantity).toFixed(2)}`); 
    break;
  case '4':
    console.log(`Total: R$${(12.00 * quantity).toFixed(2)}`);
    break;
  case '5':
    console.log(`Total: R$${(8.00 * quantity).toFixed(2)}`);
    break;
  case '6':
    console.log(`Total: R$${(13.00 * quantity).toFixed(2)}`);
    break;
  default:
    console.log('Please select a valid option');
  
}

