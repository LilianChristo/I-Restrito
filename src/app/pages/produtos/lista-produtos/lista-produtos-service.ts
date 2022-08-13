import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaProdutos } from './lista-produtos';

@Injectable({
    providedIn: 'root'
  })
  export class ListarProdutosService {
    constructor(private http:HttpClient) { }
    listaProdutos(){
      return this.http.get('http://localhost:8080/api/v1/produto').subscribe(resultado => console.log(resultado));     
    }
  } 