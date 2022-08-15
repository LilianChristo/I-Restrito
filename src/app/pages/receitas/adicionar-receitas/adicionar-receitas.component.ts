import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdicionarReceita } from './adicionar-receita';
import { AdicionarReceitaService } from './adicionar-receitas.service';

@Component({
  selector: 'app-adicionar-receitas',
  templateUrl: './adicionar-receitas.component.html',
  styleUrls: ['./adicionar-receitas.component.css']
})
export class AdicionarReceitasComponent implements OnInit {
  formReceitaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formReceitaService: AdicionarReceitaService,
    private router: Router

  ) { }


  ngOnInit(): void {
    this.formReceitaForm = this.formBuilder.group({
      titulo: ['', [
        Validators.required, Validators.minLength(5), Validators.maxLength(50)
      ]],
      ingredientes: ['', [
        Validators.required
      ]],
      modo_de_fazer: ['', [
        Validators.required
      ]],
      restricao: ['', [
        Validators.required
      ]],
      rendimento: ['', [
        Validators.required
      ]],
      tempo_de_preparo: ['', [
        Validators.required
      ]],
      imagem: ['', [
        Validators.required
      ]]

    });

  }

  cadastrar() {
    if (this.formReceitaForm.valid) {
      const novaReceitaForm = this.formReceitaForm.getRawValue() as AdicionarReceita;
      this.formReceitaService.cadastraNovaReceita(novaReceitaForm ).subscribe({
        next: (v) => {
          alert('Receita criada com sucesso!')
          this.router.navigate(['/receitaInicio']);
        },
        error: (e) => alert('Tente novamente'),
        complete: () => console.info('complete')
      });
    }
  }

  getFile(e: any) {
    this.formReceitaForm.controls["imagem"].setValue(e.target.files[0]);
  }

}
