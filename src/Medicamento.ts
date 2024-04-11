import { Produto } from "./produto";

export class Medicamento extends Produto{
  
  private_generico: string 

	constructor (id: number, nome: string, tipo: number, preco: number, generico: string) {//copiar do constructor da super classe, produto e copiar
		super(id, nome, tipo, preco) 
    this._generico = generico;
	}

}

