import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { GestionCarritoService } from '../../servicios/gestion-carrito.service';
import { AdminService } from '../../servicios/admin.service';
import { ActivatedRoute,Router} from '@angular/router';
import { Genero } from '../../AdminClass/genero';
import { Plataforma } from '../../AdminClass/plataforma';
import { JuegosList } from '../../Class/juegos-list';
import * as $ from 'jquery';
import { PageEvent } from '@angular/material/paginator';
import { CarritoCompra } from '../../Class/carrito-compra';

@Component({
  selector: 'app-listar-juegos',
  templateUrl: './listar-juegos.component.html',
  styleUrls: ['./listar-juegos.component.css']
})
export class ListarJuegosComponent implements OnInit {

  ListGenero:Genero[]=[];
  ListPlataforma:Plataforma[]=[];

  datos: JuegosList[] = [];
  
  listaCompleta: JuegosList[] = [];
  listFiltrados: JuegosList[] = [];

  GeneroSelecionado: any= [];
  PlataformaSelecionado: any= [];

  nombreJuego: any ;

  constructor(private ProductosService:ProductosService,
              private adminService:AdminService,
              private router:Router,
              private activateRoute:ActivatedRoute,
              private gestionCarritoService:GestionCarritoService) { }

  ngOnInit(): void {
    // LLamada a funciones
    this.getJuegos();
    this.getGenro();
    this.getPlataforma();
    // Despliege de las cajas de checkbox de Plataforma y Genero
    $(".DivcheckboxGenero").hide();
    $(".Genero").click(function(){
      $(".DivcheckboxGenero").toggle();
    });
    $(".DivcheckboxPlataforma").hide();
    $(".Plataforma").click(function(){
      $(".DivcheckboxPlataforma").toggle();
    });
    
  }
  //Buscador de juegos 
  filterPost = "";
 

  // paginacion de los Juegos
  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  page_size:number = 16 ;
  page_number = 1 ;
  pageSizeOptions = [8,12,20]


  //Obtener Genero Plataforma y Juegos de la base de datos
  getGenro(){
    this.adminService.getGenero().subscribe(datos => this.ListGenero = datos); 
  }

  getPlataforma(){
    this.adminService.getPlataforma().subscribe(datos => this.ListPlataforma = datos); 
  }

  getJuegos(){
    this.ProductosService.getListaJuegos().subscribe(datos => this.datos = datos);
    this.ProductosService.getListaJuegos().subscribe(datos => this.listaCompleta = datos);
  }

  //filtrar por genero y plataforma
  filtrarGenero(event){
    if(event.target.checked==true){
      this.GeneroSelecionado.push(event.target.value);
      this.listFiltrados=[];
      this.listaCompleta.forEach(todos => {
        this.GeneroSelecionado.forEach(Genero => {
          if(this.PlataformaSelecionado.length > 0){
              this.PlataformaSelecionado.forEach(Plataforma => {
                if(todos.Id_Plataforma == Plataforma && todos.Id_Genero == Genero){
                  this.listFiltrados.push(todos);
                }
              });
          }else{
            if(todos.Id_Genero == Genero){
              this.listFiltrados.push(todos);
            }
          }
        });
      });
      this.datos=this.listFiltrados;
    }else{

      var indice = this.GeneroSelecionado.indexOf(event.target.value); 
      this.GeneroSelecionado.splice(indice, 1); 

      if(this.PlataformaSelecionado.length == 0 && this.GeneroSelecionado.length > 0){
        this.listFiltrados=[];
        this.listaCompleta.forEach(todos => {
          this.GeneroSelecionado.forEach(Genero => {
            if(todos.Id_Genero == Genero){
              this.listFiltrados.push(todos);
            }  
          });
        });
        this.datos=this.listFiltrados;
      } 

      if(this.GeneroSelecionado.length == 0 && this.PlataformaSelecionado.length > 0){
        this.listFiltrados=[];
        this.listaCompleta.forEach(todos => {
          this.PlataformaSelecionado.forEach(Plataforma => {
            if(todos.Id_Plataforma == Plataforma){
              this.listFiltrados.push(todos);
            }   
          });  
        });  
        this.datos=this.listFiltrados;
      }

      if(this.PlataformaSelecionado.length == 0 && this.GeneroSelecionado.length == 0 ){
        this.datos=this.listaCompleta;
      }

      if(this.PlataformaSelecionado.length > 0 && this.GeneroSelecionado.length > 0 ){
        this.listFiltrados=[];
        this.listaCompleta.forEach(todos => {
          this.PlataformaSelecionado.forEach(Plataforma => {
            this.GeneroSelecionado.forEach(Genero => {
              if(todos.Id_Plataforma == Plataforma && todos.Id_Genero == Genero){
                this.listFiltrados.push(todos);
              } 
            });  
          });  
        });  
        this.datos=this.listFiltrados;
      }   

    }
  }
  filtrarPlataforma(event){
    if(event.target.checked==true){
      this.PlataformaSelecionado.push(event.target.value);
      this.listFiltrados=[];
      this.listaCompleta.forEach(todos => {
        this.PlataformaSelecionado.forEach(Plataforma => {
          if(this.GeneroSelecionado.length > 0){
              this.GeneroSelecionado.forEach(Genero => {
                if(todos.Id_Plataforma == Plataforma && todos.Id_Genero == Genero){
                  this.listFiltrados.push(todos);
                }
              });
          }else{
            if(todos.Id_Plataforma == Plataforma){
              this.listFiltrados.push(todos);
            }
          }
        });
      });
      this.datos=this.listFiltrados;
    }else{
      var indice = this.PlataformaSelecionado.indexOf(event.target.value); 
      this.PlataformaSelecionado.splice(indice, 1); 

      if(this.PlataformaSelecionado.length == 0 && this.GeneroSelecionado.length > 0){
        this.listFiltrados=[];
        this.listaCompleta.forEach(todos => {
          this.GeneroSelecionado.forEach(Genero => {
            if(todos.Id_Genero == Genero){
              this.listFiltrados.push(todos);
            }  
          });
        });
        this.datos=this.listFiltrados;
      } 

      if(this.GeneroSelecionado.length == 0 && this.PlataformaSelecionado.length > 0){
        this.listFiltrados=[];
        this.listaCompleta.forEach(todos => {
          this.PlataformaSelecionado.forEach(Plataforma => {
            if(todos.Id_Plataforma == Plataforma){
              this.listFiltrados.push(todos);
            }   
          });  
        });  
        this.datos=this.listFiltrados;
      }

      if(this.PlataformaSelecionado.length == 0 && this.GeneroSelecionado.length == 0 ){
        this.datos=this.listaCompleta;
      }

      if(this.PlataformaSelecionado.length > 0 && this.GeneroSelecionado.length > 0 ){
        this.listFiltrados=[];
        this.listaCompleta.forEach(todos => {
          this.PlataformaSelecionado.forEach(Plataforma => {
            this.GeneroSelecionado.forEach(Genero => {
              if(todos.Id_Plataforma == Plataforma && todos.Id_Genero == Genero){
                this.listFiltrados.push(todos);
              } 
            });  
          });  
        });  
        this.datos=this.listFiltrados;
      } 

    }
  }

  //comprar
  comprar(event){
    const articulo=new CarritoCompra();
      articulo.Id_Juego=event.Id_Juego;
      articulo.Id_Plataforma=event.Id_Plataforma;
      articulo.Nombre_Juego=event.Nombre_Juego;
      articulo.Nombre_Plataforma=event.Nombre_Plataforma;
      articulo.Edicion=event.Edicion;
      articulo.Portada=event.Portada;
      articulo.Cantidad= 1;
      articulo.Precio= event.Precio;

      const respuesta=this.gestionCarritoService.anadirEnCarrito(articulo);
    if (respuesta!="OK") {
      //this.mensaje = "OPERACION NO REALIZADA. INTENTELO OTRA VEZ";
      alert("OPERACION NO REALIZADA. INTENTELO OTRA VEZ");
    }
  }

  
}
