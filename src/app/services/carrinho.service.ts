import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: Produto[];

  constructor() { 

    this.itens = [];
  }

  adicionarAoCarrinho(produto: Produto){
    this.itens.push(produto);
  }

  listaItens(){
    return this.itens;
  }

  limparCarrinho(){
    this.itens = [];
    return this.itens;
  }
}
