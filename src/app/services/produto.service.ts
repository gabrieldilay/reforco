import { Produto } from './../models/produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3001/produtos"

  listar() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  buscarPorId(id: number) : Observable<Produto> {
    const path = `${this.url}/${id}`;
    return this.http.get<Produto>(path);
  }

  salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  atualizar(produto: Produto) : Observable<Produto> {
    const path = `${this.url}/${produto.id}`;
    return this.http.put<Produto> (path, produto);   
  }


  excluir(id: number) : Observable<Produto> {
    const path = `${this.url}/${id}`;
    return this.http.delete<Produto> (path);  
  }
}
