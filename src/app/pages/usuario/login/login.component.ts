import { AutenticacaoService } from './../../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email='';
  senha='';

  constructor(private authService:AutenticacaoService) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.autenticar(this.email,this.senha).subscribe({
      next: (v) => alert('autenticado com sucesso'),
      error: (e) => alert('Email ou Senha inválido'),
      complete: () => console.info('complete')
  },
    )
  }

}
