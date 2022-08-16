import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdicionarProduto } from '../adicionar-produtos/adicionar-produtos';
import { EditaProdutos, RecuperaProduto } from './edita-produtos';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class EditaProdutosService {

  constructor(private http: HttpClient) { }
  produto!: RecuperaProduto;



  listarProdutoPorId(id: number): Observable<RecuperaProduto> {
    return this.http.get<RecuperaProduto>(`${API}/produto/${id}`);
  }
  
  editaProduto(editaProduto: EditaProdutos) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(editaProduto)){
      formData.append(key, value); 
  }

  return this.http.put(`${API}/produto/${editaProduto.id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
}
}




