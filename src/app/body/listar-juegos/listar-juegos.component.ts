import { Component, OnInit, ViewChild } from '@angular/core';
import { JuegosService } from '../../servicios/juegos.service';
import { GestionCarritoService } from '../../servicios/gestion-carrito.service';
import { FiltrarService } from '../../servicios/filtrar.service';
import { AdminService } from '../../servicios/admin.service';
import { ActivatedRoute,Router} from '@angular/router';
//import { MatPaginatorModule, MatTableDataSource, MatSort} from '@angular/material';
import { Juego } from '../../AdminClass/juego';
import { Genero } from '../../AdminClass/genero';
import { Plataforma } from '../../AdminClass/plataforma';
import { RelacionJuego } from '../../AdminClass/relacion-juego';
import { JuegosList } from '../../Class/juegos-list';
import * as $ from 'jquery';
import { juegos} from '../../Class/Interfaces/Juegos';
import { PageEvent } from '@angular/material/paginator';




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

  columnsToDisplay=['Imagen', 'Nombre', 'Tipo', 'Descripcion','Precio'];

  constructor(private juegosService:JuegosService,
              private adminService:AdminService,
              private router:Router,
              private filtrarService:FiltrarService,
              private activateRoute:ActivatedRoute,
              private gestionCarritoService:GestionCarritoService) { }

  ngOnInit(): void {
    this.getJuegos();


    this.getGenro();
    $(".DivcheckboxGenero").hide();
    $(".Genero").click(function(){
      $(".DivcheckboxGenero").toggle();
    });
    this.getPlataforma();
    $(".DivcheckboxPlataforma").hide();
    $(".Plataforma").click(function(){
      $(".DivcheckboxPlataforma").toggle();
    });
    
  }
  
  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1

  }
  page_size:number = 16 ;
  page_number = 1 ;
  pageSizeOptions = [8,12,20]


  getGenro(){
    this.adminService.getGenero().subscribe(datos => this.ListGenero = datos); 
  }

  getPlataforma(){
    this.adminService.getPlataforma().subscribe(datos => this.ListPlataforma = datos); 
  }

  getJuegos(){
    this.juegosService.getListaJuegos().subscribe(datos => this.datos = datos);
    this.juegosService.getListaJuegos().subscribe(datos => this.listaCompleta = datos);
  }

  comprar(event){
  }

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
}
