import { Router } from '@angular/router';
import { FormUsuarioService } from './form-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormUsuario } from './form-usuario';
import { senhaIguaisValidator } from './senhaIguais-validator';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  formusuarioForm!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private formUsuarioService: FormUsuarioService,
    private router:Router

    ) { }

  ngOnInit(): void {
    this.formusuarioForm = this.formBuilder.group({
      nome:['',[
        Validators.required,Validators.minLength(3)
      ]],
      sobrenome:[''],
      email:['',[
        Validators.required,Validators.email
      ]],
      senha:['',[
        Validators.required, Validators.minLength(4)
      ]],
      uf:['',[
        Validators.required, Validators.minLength(2), Validators.maxLength(2)
      ]],
      cidade:['',[
        Validators.required, Validators.minLength(2), Validators.maxLength(50)
      ]],
      dataNascimento:['',[
        Validators.required
      ] ],
      confirmarSenha:['',[
        Validators.required, Validators.minLength(4)
      ]],

    },
    {
      Validators:[senhaIguaisValidator],
    },
    );

  }
  cadastrar(){
    if(this.formusuarioForm.valid){
      const novoUsuarioForm= this.formusuarioForm.getRawValue() as FormUsuario;
      this.formUsuarioService.cadastraNovoUsuario(novoUsuarioForm).subscribe({
        next: (v) => this.router.navigate(['login']),
        error: (e) => alert('Tente novamente'),
        complete: () => console.info('complete')

      })

      }
    }

  }


