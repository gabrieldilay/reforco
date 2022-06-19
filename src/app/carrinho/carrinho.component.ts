import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { CarrinhoService } from '../services/carrinho.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinho: CarrinhoService) { 
    this.produtos = carrinho.itens;
  }

  ngOnInit(): void {
  }

  produtos: Produto[];

  colunaS: string[] = ['nome', 'desc', 'preco'];
}
