import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaProdutosNome, Produto } from './lista-produtos-nome';
import { ListaProdutosNomeService } from './lista-produtos-nome.service';

@Component({
  selector: 'app-lista-produtos-nome',
  templateUrl: './lista-produtos-nome.component.html',
  styleUrls: ['./lista-produtos-nome.component.css']
})
export class ListaProdutosNomeComponent implements OnInit {

  public paginaAtual = 1;
  listaProdutos!: ListaProdutosNome;
  produto!: Produto;
  cursoSelecionadoId!: number;
  

  constructor(
    private produtosService: ListaProdutosNomeService, 
    private router: Router, private route: ActivatedRoute,
    ) {

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const nome = params['nome'];
      console.log(nome);
      this.produtosService.listarProdutoPorNome(nome).subscribe((produtos) => { this.listaProdutos = produtos; })
      console.log(this.listaProdutos); 
    })
  }

  onEditById(id: number): void {
    this.router.navigate(['produto/editar', id]);
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
