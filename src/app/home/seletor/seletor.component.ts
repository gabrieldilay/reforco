import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css']
})
export class SeletorComponent implements OnInit {

  quantidade = 1;

  @Input() produto: Produto;
  @Output() eventoDeClique: EventEmitter<Item> = new EventEmitter();

  constructor() {
    this.produto = {} as Produto;
   }

  ngOnInit(): void {
  }

  adicionarItem(){
    this.quantidade++;
    console.log("Quantidade: " + this.quantidade);
  }

  removerItem(){
    if(this.quantidade > 1){
      this.quantidade--;
      console.log("Quantidade: " + this.quantidade);
    } else {
      console.log( "Não é possivel remover item do carrinho")
    }
  }

  adicionarAoCarrinho(produto: Produto) {
    let item: Item = { produto: produto, qtde: this.quantidade};
    this.eventoDeClique.emit(item);
    console.log(item);
  }

}
