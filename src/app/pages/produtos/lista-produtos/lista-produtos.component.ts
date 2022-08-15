import { Component, Input, OnInit } from '@angular/core';
import { ListaProdutos, Produtos } from './lista-produtos';
import { ListarProdutosService } from './lista-produtos-service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  public paginaAtual = 1;
  @Input() produtos: Produtos = [];
  @Input() produto!: ListaProdutos;

  constructor(private produtosService: ListarProdutosService, ) { 

  }

  ngOnInit(): void {
       this.produtosService.listaTodosProdutos().subscribe(produtos => {this.produtos = produtos;
      console.log(this.produtos);
    })
  }

  onEditById(id: number): void {
    this.produtosService.listarProdutoPorId(id).subscribe(produto => {this.produto = produto;
      console.log(produto);
    })
  }

  onDeleteById(id: number): void {
    this.produtosService.deletarProdutoPorId(id).subscribe(produto => {this.produto = produto;
      console.log(produto);
    })
  }

  
}
