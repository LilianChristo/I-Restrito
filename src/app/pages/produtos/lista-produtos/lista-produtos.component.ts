import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  listarProdutos() {

  this.http.get('http://localhost:8080/api/v1/produto').subscribe(resultado => console.log(resultado));     
    }

}
