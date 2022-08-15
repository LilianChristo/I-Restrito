import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListaProdutos, Produto } from './lista-produtos';

import { ListarProdutosService } from './lista-produtos-service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  public paginaAtual = 1;
  listaProdutos!: ListaProdutos;
  produto!: Produto;

  constructor(private produtosService: ListarProdutosService, private router: Router, route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.produtosService.listaTodosProdutos().subscribe((produtos) => { this.listaProdutos = produtos; })
    console.log(this.listaProdutos);
  }


  onEditById(id: number): void {
    this.router.navigate(['produto/editar', id]);
  }


  onDeleteById(id: number): void {
    this.produtosService.deletarProdutoPorId(id).subscribe(produto => {
      this.produto = produto;
      console.log(produto);
    })
  }

}

