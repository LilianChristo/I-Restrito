import { FormUsuarioComponent } from './pages/usuario/form-usuario/form-usuario.component';
import { Menu2Component } from './pages/menu2/menu2.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarProdutosComponent } from './pages/produtos/adicionar-produtos/adicionar-produtos.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'menu2',component:Menu2Component
  },
  {
    path:'usuarioform',component:FormUsuarioComponent
  },
  
  {
    path:'produto',component:AdicionarProdutosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
