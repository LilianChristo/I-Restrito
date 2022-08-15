import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private tokenService: TokenService) {}

  decodificaJWT(){
    if(this.tokenService.possuiToken()){
      const token = this.tokenService.retornaToken();
      const usuario = jwt_decode(token);
      return usuario;
    }
    return null;
  }

  salvarToken(token:string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluiToken();
  }
}
