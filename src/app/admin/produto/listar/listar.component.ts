import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  produtos: Produto [];
  displayedColumns: string[] = ['id','nome','desc','preco'];

  constructor(private service: ProdutoService) { 
    this.produtos = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(produtos => {
      this.produtos = produtos;
      console.log(this.produtos);
    });
    }
  }
