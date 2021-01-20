import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { GestionCarritoService } from '../../servicios/gestion-carrito.service';
import { AdminService } from '../../servicios/admin.service';
import { ActivatedRoute,Router} from '@angular/router';
import { Categoria } from '../../AdminClass/categoria';
import { Plataforma } from '../../AdminClass/plataforma';
import { AccesoriosList } from '../../Class/accesorios-list';
import * as $ from 'jquery';
import { PageEvent } from '@angular/material/paginator';
import { CarritoCompra } from '../../Class/carrito-compra';


@Component({
  selector: 'app-listar-accesorios',
  templateUrl: './listar-accesorios.component.html',
  styleUrls: ['./listar-accesorios.component.css']
})
export class ListarAccesoriosComponent implements OnInit {

  ListCategoria:Categoria[]=[];
  ListPlataforma:Plataforma[]=[];

  datos: AccesoriosList[] = [];
  
  listaCompleta: AccesoriosList[] = [];
  listFiltrados: AccesoriosList[] = [];

  CategoriaSelecionado: any= [];
  PlataformaSelecionado: any= [];

  nombreAccesorio: any ;

  constructor(private ProductosService:ProductosService,
              private adminService:AdminService,
              private router:Router,
              private activateRoute:ActivatedRoute,
              private gestionCarritoService:GestionCarritoService) { }

  ngOnInit(): void {
    // LLamada a funciones
    this.getAccesorios();
    this.getCategoria();
    this.getPlataforma();

      // Despliege de las cajas de checkbox de Plataforma y Categoria
      $(".DivcheckboxCategoria").hide();
      $(".Categoria").click(function(){
        $(".DivcheckboxCategoria").toggle();
      });
      $(".DivcheckboxPlataforma").hide();
      $(".Plataforma").click(function(){
        $(".DivcheckboxPlataforma").toggle();
      });
  }
  //Buscador de Accesorio 
  filterPost = "";

 // paginacion de los Accesorios
  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  page_size:number = 16 ;
  page_number = 1 ;
  pageSizeOptions = [8,12,20]

    //Obtener Genero Plataforma y Accesorios de la base de datos
    getCategoria(){
      this.adminService.getCategoria().subscribe(datos => this.ListCategoria = datos); 
    }
  
    getPlataforma(){
      this.adminService.getPlataforma().subscribe(datos => this.ListPlataforma = datos); 
    }
  
    getAccesorios(){
      this.ProductosService.getListaAccesorios().subscribe(datos => this.datos = datos);
      this.ProductosService.getListaAccesorios().subscribe(datos => this.listaCompleta = datos);
    }
  

      //filtrar por genero y plataforma
  filtrarCategoria(event){
    if(event.target.checked==true){
      this.CategoriaSelecionado.push(event.target.value);
      this.listFiltrados=[];
      this.listaCompleta.forEach(todos => {
        this.CategoriaSelecionado.forEach(Categoria => {
          if(this.PlataformaSelecionado.length > 0){
              this.PlataformaSelecionado.forEach(Plataforma => {
                if(todos.Id_Plataforma == Plataforma && todos.Id_Categoria == Categoria){
                  this.listFiltrados.push(todos);
                }
              });
          }else{
            if(todos.Id_Categoria == Categoria){
              this.listFiltrados.push(todos);
            }
          }
        });
      });
      this.datos=this.listFiltrados;
    }else{

      var indice = this.CategoriaSelecionado.indexOf(event.target.value); 
      this.CategoriaSelecionado.splice(indice, 1); 

      if(this.PlataformaSelecionado.length == 0 && this.CategoriaSelecionado.length > 0){
        this.listFiltrados=[];
        this.listaCompleta.forEach(todos => {
          this.CategoriaSelecionado.forEach(Categoria => {
            if(todos.Id_Categoria == Categoria){
              this.listFiltrados.push(todos);
            }  
          });
        });
        this.datos=this.listFiltrados;
      } 

      if(this.CategoriaSelecionado.length == 0 && this.PlataformaSelecionado.length > 0){
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

      if(this.PlataformaSelecionado.length == 0 && this.CategoriaSelecionado.length == 0 ){
        this.datos=this.listaCompleta;
      }

      if(this.PlataformaSelecionado.length > 0 && this.CategoriaSelecionado.length > 0 ){
        this.listFiltrados=[];
        this.listaCompleta.forEach(todos => {
          this.PlataformaSelecionado.forEach(Plataforma => {
            this.CategoriaSelecionado.forEach(Categoria => {
              if(todos.Id_Plataforma == Plataforma && todos.Id_Categoria == Categoria){
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
          if(this.CategoriaSelecionado.length > 0){
              this.CategoriaSelecionado.forEach(Categoria => {
                if(todos.Id_Plataforma == Plataforma && todos.Id_Categoria == Categoria){
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

      if(this.PlataformaSelecionado.length == 0 && this.CategoriaSelecionado.length > 0){
        this.listFiltrados=[];
        this.listaCompleta.forEach(todos => {
          this.CategoriaSelecionado.forEach(Categoria => {
            if(todos.Id_Categoria == Categoria){
              this.listFiltrados.push(todos);
            }  
          });
        });
        this.datos=this.listFiltrados;
      } 

      if(this.CategoriaSelecionado.length == 0 && this.PlataformaSelecionado.length > 0){
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

      if(this.PlataformaSelecionado.length == 0 && this.CategoriaSelecionado.length == 0 ){
        this.datos=this.listaCompleta;
      }

      if(this.PlataformaSelecionado.length > 0 && this.CategoriaSelecionado.length > 0 ){
        this.listFiltrados=[];
        this.listaCompleta.forEach(todos => {
          this.PlataformaSelecionado.forEach(Plataforma => {
            this.CategoriaSelecionado.forEach(Categoria => {
              if(todos.Id_Plataforma == Plataforma && todos.Id_Categoria == Categoria){
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
      articulo.Id_Accesorios=event.Id_Accesorios;
      articulo.Id_Plataforma=event.Id_Plataforma;
      articulo.Nombre_Accesorios=event.Nombre_Accesorios;
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
