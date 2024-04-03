
import { Queue } from './Queue' 

const read = require('readline-sync');

const fila = new Queue<number>();
let option: number;

let name 

do {
  console.log('**********************************************');
  console.log('                                              ');
  console.log('      1 - Adicionar o Cliente na Fila'         );
  console.log('      2 - Listar todos os Clientes'            );
  console.log('      3 - Retirar Cliente da Fila'             );
  console.log('      0 - Sair'                                );
  console.log('                                              ');
  console.log('**********************************************');


  console.log('Digite a opção: ');
  option = read.questionInt('');

  switch (option){
    case 1:
      console.log('Digit o nome do Cliente: ');
      let name = read.question('');
      fila.enqueue(name);
      fila.printQueue();

      break;
    case 2:
      if (fila.isEmpty()) {
        console.log('Não há nada para exibir');
      
      }else 
      fila.printQueue();

  
      break;
    case 3:

      if (fila.isEmpty()) {
       console.log('Retirar Cliente da Fila: ');
      
      }else 
       fila.dequeue();
       console.log('O cliente foi chamado!');

      break;
      

    case 0:
      console.log('Program finalized! ')
      break;
    default:
      console.log('Digit a valid option')
      console.log('Digit the client Name: ');

      break;
  }

} while (option !== 0);


  
