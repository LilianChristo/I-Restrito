import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenentes/header/header.component';
import { RodapeComponent } from './componenentes/rodape/rodape.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FormUsuarioComponent } from './pages/usuario/form-usuario/form-usuario.component';
import { ListaProdutosComponent } from './pages/produtos/lista-produtos/lista-produtos.component';
import { FormReceitasComponent } from './pages/receitas/form-receitas/form-receitas.component';
import { ListaReceitasComponent } from './pages/receitas/lista-receitas/lista-receitas.component';
import { FormProdutosComponent } from './pages/produtos/form-produtos/form-produtos.component';
import { AdicionarProdutoComponent } from './pages/produtos/adicionar-produtos/adicionar-produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Menu2Component } from './pages/menu2/menu2.component';
import { MensagemComponent } from './componenentes/mensagem/mensagem.component';
import { Interceptors } from './utils/interceptors';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RodapeComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    FormUsuarioComponent,
    ListaProdutosComponent,
    FormReceitasComponent,
    ListaReceitasComponent,
    FormProdutosComponent,
    AdicionarProdutoComponent,
    Menu2Component,
    MensagemComponent,

    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptors,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

