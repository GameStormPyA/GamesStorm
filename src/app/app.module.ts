import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { InsertAccesoriosComponent } from './body/insert-accesorios/insert-accesorios.component';
import { ListAccesoriosComponent } from './body/list-accesorios/list-accesorios.component';
//clases
import { AccesoriosService} from './servicios/accesorios.service';
import { CategoriaService} from './servicios/categoria.service';
import { PujaService} from './servicios/puja.service';
import { SubastaService} from './servicios/subasta.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';  
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule} from '@angular/material/badge';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCardModule} from '@angular/material/card';

//form
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//
import { EditAcessoriosComponent } from './body/edit-acessorios/edit-acessorios.component';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { ListCategoriaComponent } from './body/list-categoria/list-categoria.component';
import { ListSubastaComponent } from './body/list-subasta/list-subasta.component';
import { EditSubastaComponent } from './body/edit-subasta/edit-subasta.component';
import { InsertSubastaComponent } from './body/insert-subasta/insert-subasta.component';
import { EditPujaComponent } from './body/edit-puja/edit-puja.component';
import { ListPujaComponent } from './body/list-puja/list-puja.component';
import { HomeComponent } from './body/home/home.component';
import { ProductosComponent } from './central/productos/productos.component';
import { LoginComponent } from './session/login/login.component';
import { RegisterComponent } from './session/register/register.component';
import { CarritoComponent } from './carrito/carrito/carrito.component';
import { FiltroComponent } from './filtro/filtro/filtro.component';
import { SubastaComponent } from './subasta/subasta/subasta.component';
import { UserComponent } from './config/user/user.component';
import { NoticiaComponent } from './news/noticia/noticia.component';
import { AboutComponent } from './about/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeadComponent,
    InsertAccesoriosComponent,
    ListAccesoriosComponent,
    EditAcessoriosComponent,
    DialogoConfirmacionComponent,
    ListCategoriaComponent,
    ListSubastaComponent,
    EditSubastaComponent,
    InsertSubastaComponent,
    EditPujaComponent,
    ListPujaComponent,
    HomeComponent,
    ProductosComponent,
    LoginComponent,
    RegisterComponent,
    CarritoComponent,
    FiltroComponent,
    SubastaComponent,
    UserComponent,
    NoticiaComponent,
    AboutComponent,
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
    MatCardModule
  ],
  providers: [
    AccesoriosService,
    CategoriaService,
    PujaService,
    SubastaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
