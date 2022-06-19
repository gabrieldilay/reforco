import { Produto } from './../../../models/produto.model';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']

})
export class IncluirComponent implements OnInit {


  ngOnInit(): void {
  }

  produto: Produto;

  constructor(private service: ProdutoService, 
    private router: Router) { 
    this.produto = {} as Produto;
  }

 salvar(produto : Produto) {
  this.service.salvar(produto).subscribe(() => {
    console.log('Produto salvo!');
    this.router.navigate(['/admin'])
  });
 }

}
