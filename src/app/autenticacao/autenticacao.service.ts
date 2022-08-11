import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }
  autenticar(email:string, senha:string):Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/v1/auth',{
      username:email,
      password:senha,
    });
  }
}
