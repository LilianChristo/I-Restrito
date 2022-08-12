import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../pages/produtos/adicionar-produtos/adicionar-produtos";

@Injectable({
    providedIn: 'root'
  })
  export class ProdutoService {
  
    constructor(private _http:HttpClient) {
    
    }
  
   inserirProduto(produto:Produto) : Observable<Produto>{
    return this._http.post<Produto>('http://localhost:8080/api/v1/produto', produto);
    
    }
  } 