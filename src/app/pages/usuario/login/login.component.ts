import { TokenService } from './../../../autenticacao/token.service';
import { AutenticacaoService } from './../../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {}
  login() {
    this.authService.autenticar(this.email, this.senha).subscribe({
      next: (v: any) => {
        this.tokenService.salvaToken(v.body.token);
        this.router.navigate([''])
      },
      error: (e) => alert('Email ou Senha inválido'),
      complete: () => console.info('complete'),
    });
  }
}
