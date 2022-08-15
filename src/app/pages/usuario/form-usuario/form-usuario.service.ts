import { FormUsuario } from './form-usuario';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormUsuarioService {
  constructor(private http:HttpClient) { }
  cadastraNovoUsuario(formusuario:FormUsuario){
    return this.http.post('http://localhost:8080/api/v1/usuario', {...formusuario, perfil: "COMMON_USER"});

  }

}
