import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdicionarProduto } from './adicionar-produtos';
import { AdicionarProdutoService } from './adicionar-produtos.service';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrls: ['./adicionar-produtos.component.css']
})
export class AdicionarProdutoComponent implements OnInit {
  formProdutoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formProdutoService: AdicionarProdutoService,
    private router: Router

  ) { }


  ngOnInit(): void {
    this.formProdutoForm = this.formBuilder.group({
      nome: ['', [
        Validators.required, Validators.minLength(3)
      ]],
      descricao: ['', [
        Validators.required, Validators.minLength(3)
      ]],
      restricao: [''],
      origem: ['', [
        Validators.required, Validators.minLength(2), Validators.maxLength(2)
      ]],
      marca: ['', [
        Validators.required, Validators.minLength(2), Validators.maxLength(50)
      ]],
      tipoProduto: ['', [
        Validators.required
      ]],
    },
    {
      
    },
    );

  }

  cadastrar() {
    if (this.formProdutoForm.valid) {

      const novoProdutoForm = this.formProdutoForm.getRawValue() as AdicionarProduto;
      this.formProdutoService.cadastraNovoProduto(novoProdutoForm).subscribe({
        next: (v) => this.router.navigate(['login']),
        error: (e) => alert('Tente novamente'),
        complete: () => console.info('complete')

      })

    }
  }
}
