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
        Validators.required, Validators.minLength(5), Validators.maxLength(50)
      ]],
      descricao: ['', [
        Validators.required, Validators.minLength(5), Validators.maxLength(250)
      ]],
      restricao: ['', [
        Validators.required
      ]],
      origem: ['', [
        Validators.required
      ]],
      marca: ['', [
        Validators.required
      ]],
      tipoProduto: ['', [
        Validators.required
      ]],
      imagem: ['', [
        Validators.required
      ]]
    });

  }

  cadastrar() {
    if (this.formProdutoForm.valid) {
      const novoProdutoForm = this.formProdutoForm.getRawValue() as AdicionarProduto;
      this.formProdutoService.cadastraNovoProduto(novoProdutoForm).subscribe({
        next: (v) => {
          alert('Produto criado com sucesso!')
          this.router.navigate(['/produto']);
        },
        error: (e) => alert('Tente novamente'),
        complete: () => console.info('complete')
      });
    }
  }

  getFile(e: any) {
    this.formProdutoForm.controls["imagem"].setValue(e.target.files[0]);
  }
}
