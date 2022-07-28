import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenentes/header/header.component';
import { RodapeComponent } from './componenentes/rodape/rodape.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import { CadastroReceitaComponent } from './pages/cadastro-receita/cadastro-receita.component';
import { ListagemProdutoComponent } from './pages/listagem-produto/listagem-produto.component';
import { ListagemReceitaComponent } from './pages/listagem-receita/listagem-receita.component';
import { FormusuarioComponent } from './pages/usuario/formusuario/formusuario.component';
import { FormUsuarioComponent } from './pages/usuario/form-usuario/form-usuario.component';
import { ListaProdutosComponent } from './pages/usuario/lista-produtos/lista-produtos.component';
import { FormReceitasComponent } from './pages/receitas/form-receitas/form-receitas.component';
import { ListaReceitasComponent } from './pages/receitas/lista-receitas/lista-receitas.component';
import { FormProdutosComponent } from './pages/produtos/form-produtos/form-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RodapeComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    LoginComponent,
    MenuComponent,
    CadastroProdutoComponent,
    CadastroReceitaComponent,
    ListagemProdutoComponent,
    ListagemReceitaComponent,
    FormusuarioComponent,
    FormUsuarioComponent,
    ListaProdutosComponent,
    FormReceitasComponent,
    ListaReceitasComponent,
    FormProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
