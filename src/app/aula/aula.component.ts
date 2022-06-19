import { Produto } from './../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { Produtos } from './../produtos';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  produtos = Produtos;

  constructor(private carrinho: CarrinhoService) { }

  adicionarAoCarrinho(produto: Produto){
    this.carrinho.adicionarAoCarrinho(produto);
    console.log(produto.nome + " adicionado ao carrinho!")
  }


  ngOnInit() {
  }

}
