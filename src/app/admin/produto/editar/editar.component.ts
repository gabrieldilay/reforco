import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from './../../../models/produto.model';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  produto: Produto;

  constructor(private service: ProdutoService,
    private router: Router, private route : ActivatedRoute) { 

   this.produto = {} as Produto;

  }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(str)).subscribe( produto => {
      this.produto = produto;
    });
  }
    atualizar(produto : Produto ) {
      this.service.atualizar(produto).subscribe(() => {
        console.log('Produto atualizado!');
        this.router.navigate(['/admin']);
      })
    }
}
