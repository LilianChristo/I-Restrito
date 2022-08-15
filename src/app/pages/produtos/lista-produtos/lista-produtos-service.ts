import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { ListaProdutos, Produtos } from './lista-produtos';



const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})

export class ListarProdutosService {
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaTodosProdutos(): Observable<Produtos> {
    return this.http.get<Produtos>(`${API}/produto`);
  }

    listarProdutoPorId(id: number): Observable<ListaProdutos> {
       return this.http.get<ListaProdutos>(`${API}/produto/${id}`);
  }

  deletarProdutoPorId(id: number): Observable<ListaProdutos> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('Bearer', token);
    return this.http.delete<ListaProdutos>(`${API}/produto/${id}`, {headers});
  }


} 