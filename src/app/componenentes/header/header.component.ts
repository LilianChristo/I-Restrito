import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  constructor(private usuarioService: UsuarioService, private router: Router){}

  nomeUsuario: any = this.usuarioService.decodificaJWT();

  logout(){
    this.usuarioService.logout();
    location.reload();
  }
}
