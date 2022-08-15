import { AdicionarReceita } from './adicionar-receita';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdicionarReceitaService {
  constructor(private http: HttpClient) { }
  cadastraNovaReceita(adicionarReceita: AdicionarReceita) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(adicionarReceita)) {
      formData.append(key, value);
    }

    return this.http.post('http://localhost:8080/api/v1/receita', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  }
}
