import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdicionarProduto } from './adicionar-produtos';

@Injectable({
  providedIn: 'root'
})
export class AdicionarProdutoService {
  constructor(private http: HttpClient) { }
  cadastraNovoProduto(adicionarProduto: AdicionarProduto) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(adicionarProduto)) {
      formData.append(key, value);
    }

    return this.http.post('http://localhost:8080/api/v1/produto', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  }
}
