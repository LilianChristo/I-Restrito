import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Busca, ListaProdutos, Produto } from './lista-produtos';
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
  cursoSelecionadoId!: number;
  busca!: Busca;
  formProdutoForm!: FormGroup;
  queryField = new FormControl();

  constructor(
    private produtosService: ListarProdutosService, 
    private router: Router, route: ActivatedRoute,

    
    ) {

  }

  ngOnInit(): void {
    this.produtosService.listaTodosProdutos().subscribe((produtos) => { this.listaProdutos = produtos; })
    console.log(this.listaProdutos);

  }


  onEditById(id: number): void {
    this.router.navigate(['produto/editar', id]);
  }

  onSearchByNome() {
    console.log(this.queryField.value);
    this.router.navigate(['produto/nome', this.queryField.value]);
  }

  onDeleteById(): void {
    this.produtosService.deletarProdutoPorId(this.cursoSelecionadoId).subscribe( {
      next: (v) => {
        alert("Produto excluído com sucesso!")
        this.refresh();
      },
      error: (e) => alert('Tente novamente'),
      complete: () => console.log('complete'),
    });
    this.closePopup();

  }

  ongetByNome(nome: string): void {
    this.router.navigate(['produto/nome', nome]);

  }

  displayStyle = "none";
  
  openPopup(id: number) {
    this.cursoSelecionadoId = id;
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  refresh(): void {
    window.location.reload();
}

}

