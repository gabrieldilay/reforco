import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AulaComponent } from './aula/aula.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { AdminComponent } from './admin/admin.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NavComponent } from './layout/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { SeletorComponent } from './home/seletor/seletor.component';
import { MatSelectModule} from '@angular/material/select';
import { FormatoRealPipe } from './formato-real.pipe';
import { BarraComponent } from './admin/barra/barra.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatInputModule} from '@angular/material/input';
import { ListarComponent } from './admin/produto/listar/listar.component';
import { IncluirComponent } from './admin/produto/incluir/incluir.component';
import { EditarComponent } from './admin/produto/editar/editar.component';
import { ExcluirComponent } from './admin/produto/excluir/excluir.component';

@NgModule({
  declarations: [									
    AppComponent,
      HomeComponent,
      AulaComponent,
      FooterComponent,
      HeaderComponent,
      SobreComponent,
      AdminComponent,
      CarrinhoComponent,
      NavComponent,
      SeletorComponent,
      FormatoRealPipe,
      BarraComponent,
      ListarComponent,
      IncluirComponent,
      EditarComponent,
      ExcluirComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    HttpClientJsonpModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
