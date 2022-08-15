import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecuperaProduto } from './edita-produtos';
import { EditaProdutosService } from './edita-produtos.service';

@Component({
  selector: 'app-edita-produtos',
  templateUrl: './edita-produtos.component.html',
  styleUrls: ['./edita-produtos.component.css']
})
export class EditaProdutosComponent implements OnInit {

  formProdutoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: EditaProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    let registro = null;

    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      const produto = this.service.listarProdutoPorId(id).subscribe(produto => {
        registro = produto; this.recuperaProdutos(produto);
      });
    }
    );

    this.formProdutoForm = this.formBuilder.group({
      nome: ['', [
        Validators.required, Validators.minLength(5), Validators.maxLength(50)
      ]],
      descricao: ['', [
        Validators.required, Validators.minLength(5), Validators.maxLength(50)
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


  recuperaProdutos(produto: RecuperaProduto): void {
    this.formProdutoForm = this.formBuilder.group({
      id: produto.id,
      nome: produto.nome,
      descricao: produto.descricao,
      restricao: produto.restricao,
      origem: produto.origem,
      marca: produto.marca,
      tipoProduto: produto.tipoProduto,
      imagem: produto.foto,
    });
  }



  getFile(e: any) {
    this.formProdutoForm.controls["imagem"].setValue(e.target.files[0]);
  }
}
