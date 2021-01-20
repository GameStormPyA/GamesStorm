import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
//clases
import { HomeService} from './servicios/home.service';
import { AdminService} from './servicios/admin.service';
import { ProductosService} from './servicios/productos.service';
import { GestionCarritoService } from './servicios/gestion-carrito.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';  
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule} from '@angular/material/badge';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCardModule} from '@angular/material/card';
import { MatRadioModule} from '@angular/material/radio';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { YouTubePlayerModule} from '@angular/youtube-player';


//form
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './session/login/login.component';
import { RegisterComponent } from './session/register/register.component';
import { FiltroComponent } from './filtro/filtro/filtro.component';
import { UserComponent } from './config/user/user.component';
import { NoticiaComponent } from './news/noticia/noticia.component';
import { AboutComponent } from './about/about/about.component';
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
import { from } from 'rxjs';
import { ListarJuegosComponent } from './body/listar-juegos/listar-juegos.component';
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';
import { PaginatePipe } from './pipes/paginate.pipe';
import { CustomMatPaginatorIntl } from './paginator-es';
import { FilterPipe } from './pipes/filter.pipe';
import { ListarAccesoriosComponent } from './body/listar-accesorios/listar-accesorios.component';
import { MostrarAccesorioComponent } from './body/mostrar-accesorio/mostrar-accesorio.component';
import { MostrarJuegoComponent } from './body/mostrar-juego/mostrar-juego.component';
import { CarritoComponent } from './body/carrito/carrito.component';
import { PlataformasComponent } from './Admin/panel/plataformas/plataformas.component';
import { MapaWebComponent } from './body/mapa-web/mapa-web.component';
import { SubastasComponent } from './body/subastas/subastas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeadComponent,
    DialogoConfirmacionComponent,
    ListSubastaComponent,
    ListPujaComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CarritoComponent,
    FiltroComponent,
    UserComponent,
    NoticiaComponent,
    AboutComponent,
    PanelComponent,
    CategoriaComponent,
    GeneroComponent,
    ListUserComponent,
    AgregarUserComponent,
    EditarUserComponent,
    AgregarJuegoComponent,
    ListJuegoComponent,
    EditarJuegoComponent,
    ListaRelacionJuegoComponent,
    AgregarRelacionJuegoComponent,
    EditarRelacionJuegoComponent,
    ListAccesorioComponent,
    AgregarAccesorioComponent,
    EditarAccesorioComponent,
    EditarRelacionAccesorioComponent,
    ListRelacionAccesorioComponent,
    AgregarRelacionAccesorioComponent,
    AgregarSubastaComponent,
    EditarSubastaComponent,
    EditarPujaComponent,
    AgregarPujaComponent,
    EditarCompraJuegoComponent,
    ListCompraJuegoComponent,
    AgregarCompraJuegoComponent,
    AgregarCompraAccesorioComponent,
    EditarCompraAccesorioComponent,
    ListCompraAccesorioComponent,
    ListarJuegosComponent,
    PaginatePipe,
    FilterPipe,
    ListarAccesoriosComponent,
    MostrarAccesorioComponent,
    MostrarJuegoComponent,
    PlataformasComponent,
    MapaWebComponent,
    SubastasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //Material
    MatSliderModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatSelectFilterModule,
    MatMenuModule,
    MatBadgeModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    MatRadioModule,
    NgxMatFileInputModule,
    NgxPrettyCheckboxModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    YouTubePlayerModule 
  ],
  providers: [
    HomeService,
    AdminService,
    ProductosService,
    GestionCarritoService,
    {
      provide: MatPaginatorIntl, 
      useClass: CustomMatPaginatorIntl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
