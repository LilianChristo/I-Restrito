import { FormReceitasComponent } from './pages/receitas/form-receitas/form-receitas.component';
import { ListaReceitasComponent } from './pages/receitas/lista-receitas/lista-receitas.component';
import { FormUsuarioComponent } from './pages/usuario/form-usuario/form-usuario.component';
import { Menu2Component } from './pages/menu2/menu2.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarProdutoComponent } from './pages/produtos/adicionar-produtos/adicionar-produtos.component';
import { ListaProdutosComponent } from './pages/produtos/lista-produtos/lista-produtos.component';
import { FormProdutosComponent } from './pages/produtos/form-produtos/form-produtos.component';
import { EditaProdutosComponent } from './pages/produtos/edita-produtos/edita-produtos.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'menu2', component: Menu2Component
  },

  {
    path: 'usuario/cadastrar', component: FormUsuarioComponent
  },
  {
    path: 'produto', component: ListaProdutosComponent
  },
  {
    path: 'produto/cadastrar', component: AdicionarProdutoComponent
  },
  {
    path: '1produto', component: FormProdutosComponent
  },
  {
    path: 'produto/editar/:id', component: EditaProdutosComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'listReceita', component: ListaReceitasComponent
  },
  {
    path: 'FormReceita', component: FormReceitasComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
