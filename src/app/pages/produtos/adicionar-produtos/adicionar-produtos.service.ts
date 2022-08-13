import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdicionarProduto } from './adicionar-produtos';

@Injectable({
    providedIn: 'root'
  })
  export class AdicionarProdutoService {
    constructor(private http:HttpClient) { }
    cadastraNovoProduto(adicionarProduto:AdicionarProduto){
      return this.http.post('http://localhost:8080/api/v1/produto', {...adicionarProduto, perfil: "COMMON_USER"});     
    
    }
  } 