import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/adicionar-produtos.service';
import { Produto } from './adicionar-produtos';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrls: ['./adicionar-produtos.component.css']
})
export class AdicionarProdutosComponent implements OnInit {
  produtos = [] as any;

  produto:Produto = {
    nome:"",
    descricao:"",
    restricao:"",
    origem:"",
    marca:"",
    tipoProduto:"",
  }

  constructor(private service: ProdutoService) { 
    this.produto = new Produto("", "", "", "", "","");
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .inserirProduto(this.produto)
      .subscribe(response => console.log(response));

  }

}
