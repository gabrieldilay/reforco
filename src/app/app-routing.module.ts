import { CarrinhoComponent } from './carrinho/carrinho.component';
import { SobreComponent } from './sobre/sobre.component';
import { AdminComponent } from './admin/admin.component';
import { AulaComponent } from './aula/aula.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './admin/produto/listar/listar.component';
import { ExcluirComponent } from './admin/produto/excluir/excluir.component';
import { EditarComponent } from './admin/produto/editar/editar.component';
import { IncluirComponent } from './admin/produto/incluir/incluir.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'aulas', component: AulaComponent},
  {path: 'admin', component: AdminComponent,
    children : [
      { path: '', component: ListarComponent},
      { path: 'incluir', component: IncluirComponent},
      { path: 'editar/:id', component: EditarComponent},
      { path: 'excluir/:id', component: ExcluirComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
