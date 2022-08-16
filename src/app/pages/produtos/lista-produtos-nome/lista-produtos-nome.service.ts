import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { ListaProdutosNome, Produto } from './lista-produtos-nome';


const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ListaProdutosNomeService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaTodosProdutos(): Observable<ListaProdutosNome> {
    return this.http.get<ListaProdutosNome>(`${API}/produto`);
  }

  listarProdutoPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${API}/produto/${id}`);
  }

  listarProdutoPorNome(nome: string): Observable<ListaProdutosNome> {
    return this.http.get<ListaProdutosNome>(`${API}/produto/nome/${nome}`);
  }

  deletarProdutoPorId(id: number): Observable<Produto> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('Bearer', token);
    return this.http.delete<Produto>(`${API}/produto/${id}`, { headers });
  }


} 

