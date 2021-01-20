import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './session/login/login.component';
import { RegisterComponent } from './session/register/register.component';
import { CarritoComponent } from './body/carrito/carrito.component';
import { AboutComponent } from './about/about/about.component';
//import { PlataformaComponent } from './Admin/panel/plataforma/plataforma.component';
import { PanelComponent } from './Admin/panel/panel.component';
import { CategoriaComponent } from './Admin/panel/categoria/categoria.component';
import { GeneroComponent } from './Admin/panel/genero/genero.component';
import { ListUserComponent } from './Admin/panel/User/list-user/list-user.component';
import { AgregarUserComponent } from './Admin/panel/User/agregar-user/agregar-user.component';
import { EditarUserComponent } from './Admin/panel/User/editar-user/editar-user.component';
import { AgregarJuegoComponent } from './Admin/panel/Juego/agregar-juego/agregar-juego.component';
import { ListJuegoComponent } from './Admin/panel/Juego/list-juego/list-juego.component';
import { EditarJuegoComponent } from './Admin/panel/Juego/editar-juego/editar-juego.component';
import { ListaRelacionJuegoComponent } from './Admin/panel/Relacion-Juego/lista-relacion-juego/lista-relacion-juego.component';
import { AgregarRelacionJuegoComponent } from './Admin/panel/Relacion-Juego/agregar-relacion-juego/agregar-relacion-juego.component';
import { EditarRelacionJuegoComponent } from './Admin/panel/Relacion-Juego/editar-relacion-juego/editar-relacion-juego.component';
import { ListAccesorioComponent } from './Admin/panel/Accesorio/list-accesorio/list-accesorio.component';
import { AgregarAccesorioComponent } from './Admin/panel/Accesorio/agregar-accesorio/agregar-accesorio.component';
import { EditarAccesorioComponent } from './Admin/panel/Accesorio/editar-accesorio/editar-accesorio.component';
import { EditarRelacionAccesorioComponent } from './Admin/panel/relacionAccesorio/editar-relacion-accesorio/editar-relacion-accesorio.component';
import { ListRelacionAccesorioComponent } from './Admin/panel/relacionAccesorio/list-relacion-accesorio/list-relacion-accesorio.component';
import { AgregarRelacionAccesorioComponent } from './Admin/panel/relacionAccesorio/agregar-relacion-accesorio/agregar-relacion-accesorio.component';
import { AgregarSubastaComponent } from './Admin/panel/subasta/agregar-subasta/agregar-subasta.component';
import { EditarSubastaComponent } from './Admin/panel/subasta/editar-subasta/editar-subasta.component';
import { ListSubastaComponent} from './Admin/panel/subasta/list-subasta/list-subasta.component';
import { EditarPujaComponent } from './Admin/panel/puja/editar-puja/editar-puja.component';
import { AgregarPujaComponent } from './Admin/panel/puja/agregar-puja/agregar-puja.component';
import { ListPujaComponent } from './Admin/panel/puja/list-puja/list-puja.component';
import { EditarCompraJuegoComponent } from './Admin/panel/CompraJuego/editar-compra-juego/editar-compra-juego.component';
import { ListCompraJuegoComponent } from './Admin/panel/CompraJuego/list-compra-juego/list-compra-juego.component';
import { AgregarCompraJuegoComponent } from './Admin/panel/CompraJuego/agregar-compra-juego/agregar-compra-juego.component';
import { AgregarCompraAccesorioComponent } from './Admin/panel/CompraAccesorio/agregar-compra-accesorio/agregar-compra-accesorio.component';
import { EditarCompraAccesorioComponent } from './Admin/panel/CompraAccesorio/editar-compra-accesorio/editar-compra-accesorio.component';
import { ListCompraAccesorioComponent } from './Admin/panel/CompraAccesorio/list-compra-accesorio/list-compra-accesorio.component';
import { ListarJuegosComponent } from './body/listar-juegos/listar-juegos.component';
import { ListarAccesoriosComponent } from './body/listar-accesorios/listar-accesorios.component';
import { MostrarAccesorioComponent } from './body/mostrar-accesorio/mostrar-accesorio.component';
import { MostrarJuegoComponent } from './body/mostrar-juego/mostrar-juego.component';
import { PlataformasComponent } from './Admin/panel/plataformas/plataformas.component';
import { MapaWebComponent } from './body/mapa-web/mapa-web.component';
import { SubastasComponent } from './body/subastas/subastas.component';



const routes: Routes = [
  { path: "Home" , component: HomeComponent},
  { path: "Registro" , component: RegisterComponent},
  { path: "Login" , component: LoginComponent},
  { path: "Carrito" , component: CarritoComponent},
  { path: "About" , component: AboutComponent},
  { path: "Panel" , component: PanelComponent},
  { path: "Subastas" , component: SubastasComponent},
  { path: "MapaWeb" , component: MapaWebComponent},
  { path: "Panel/Plataforma" , component: PlataformasComponent},
  { path: "Panel/Categoria" , component: CategoriaComponent},
  { path: "Panel/Genero" , component: GeneroComponent},
  { path: "Panel/User" , component: ListUserComponent},
  { path: "Panel/User/Agregar" , component: AgregarUserComponent},
  { path: "Panel/User/Editar/:Id" , component: EditarUserComponent},
  { path: "Panel/Juego" , component: ListJuegoComponent},
  { path: "Panel/Juego/Agregar" , component: AgregarJuegoComponent},
  { path: "Panel/Juego/Editar/:Id" , component: EditarJuegoComponent},
  { path: "Panel/RelacionJuego" , component: ListaRelacionJuegoComponent},
  { path: "Panel/RelacionJuego/Agregar" , component: AgregarRelacionJuegoComponent},
  { path: "Panel/RelacionJuego/Editar/:Id_Juego/:Id_Plataforma" , component: EditarRelacionJuegoComponent},
  { path: "Panel/Accesorio" , component: ListAccesorioComponent},
  { path: "Panel/Accesorio/Agregar" , component: AgregarAccesorioComponent},
  { path: "Panel/Accesorio/Editar/:Id" , component: EditarAccesorioComponent},
  { path: "Panel/RelacionAccesorio" , component: ListRelacionAccesorioComponent},
  { path: "Panel/RelacionAccesorio/Agregar" , component: AgregarRelacionAccesorioComponent},
  { path: "Panel/RelacionAccesorio/Editar/:Id_Accesorio/:Id_Plataforma" , component: EditarRelacionAccesorioComponent},
  { path: "Panel/Subasta" , component: ListSubastaComponent},
  { path: "Panel/Subasta/Agregar" , component: AgregarSubastaComponent},
  { path: "Panel/Subasta/Editar/:Id" , component: EditarSubastaComponent},
  { path: "Panel/Puja" , component: ListPujaComponent},
  { path: "Panel/Puja/Agregar" , component: AgregarPujaComponent},
  { path: "Panel/Puja/Editar/:Id_Subasta/:Id_User" , component: EditarPujaComponent},
  { path: "Panel/ComprarJuego" , component: ListCompraJuegoComponent},
  { path: "Panel/ComprarJuego/Agregar" , component: AgregarCompraJuegoComponent},
  { path: "Panel/ComprarJuego/Editar/:Id_Juego/:Id_User/:Id_Plaforma" , component: EditarCompraJuegoComponent},
  { path: "Panel/ComprarAccesorio" , component: ListCompraAccesorioComponent},
  { path: "Panel/ComprarAccesorio/Agregar" , component: AgregarCompraAccesorioComponent},
  { path: "Panel/ComprarAccesorio/Editar/:Id_Accesorios/:Id_User/:Id_Plaforma" , component: EditarCompraAccesorioComponent},
  { path: "ListadoJuegos" , component: ListarJuegosComponent},
  { path: "ListadoAccesorios" , component: ListarAccesoriosComponent},
  { path: "ListadoJuegos/Juego/:Id_Juego/:Id_Plataforma" , component: MostrarJuegoComponent},
  { path: "ListadoAccesorios/Accesorio/:Id_Accesorio/:Id_Plataforma" , component: MostrarAccesorioComponent},
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
