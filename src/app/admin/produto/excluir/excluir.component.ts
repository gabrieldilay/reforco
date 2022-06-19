import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../../../services/produto.service';
import { Produto } from './../../../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  produto : Produto;
  
 constructor(private servie : ProdutoService,
  private router : Router, private route :  ActivatedRoute) { 
    this.produto = {} as Produto;
  } 

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.servie.buscarPorId(Number(str)).subscribe( produto => {
      this.produto = produto;
    });
  }


  excluir(produto : Produto) {
    this.servie.excluir(produto.id).subscribe(() => {
      console.log('Produto excluido!');
      this.router.navigate(['/admin']);
    })
  }
}
