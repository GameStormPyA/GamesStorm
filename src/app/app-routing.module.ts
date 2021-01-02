import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAccesoriosComponent} from '../app/body/list-accesorios/list-accesorios.component';
import { InsertAccesoriosComponent} from '../app/body/insert-accesorios/insert-accesorios.component';
import { EditAcessoriosComponent } from './body/edit-acessorios/edit-acessorios.component';
import { ListCategoriaComponent } from './body/list-categoria/list-categoria.component';
import { ListSubastaComponent } from './body/list-subasta/list-subasta.component';
import { EditSubastaComponent } from './body/edit-subasta/edit-subasta.component';
import { InsertSubastaComponent } from './body/insert-subasta/insert-subasta.component';
import { EditPujaComponent } from './body/edit-puja/edit-puja.component';
import { ListPujaComponent } from './body/list-puja/list-puja.component';
import { HomeComponent } from './body/home/home.component';


const routes: Routes = [
  { path: "Accesorios" , component: ListAccesoriosComponent},
  { path: "Accesorios/Agregar" , component: InsertAccesoriosComponent},
  { path: "Accesorios/Editar/:Id_Accesorios/:Id_Plataforma" , component: EditAcessoriosComponent},
  { path: "Categoria" , component: ListCategoriaComponent},
  { path: "Subastas" , component: ListSubastaComponent},
  { path: "Subastas/Agregar" , component: InsertSubastaComponent},
  { path: "Subastas/Editar/:Id" , component: EditSubastaComponent},
  { path: "Pujas" , component: ListPujaComponent},
  { path: "Pujas/Editar/:Id_Subasta/:Id_Cliente" , component: EditPujaComponent},
  { path: "Home" , component: HomeComponent},
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "**", redirectTo: "/Home" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
