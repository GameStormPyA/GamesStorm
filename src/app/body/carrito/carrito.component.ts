import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarritoCompra } from '../../Class/carrito-compra';
import { GestionCarritoService } from '../../servicios/gestion-carrito.service';
import * as $ from 'jquery';
import { async } from 'rxjs/internal/scheduler/async';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AdminService } from '../../servicios/admin.service';
import { CompraAccesorio } from '../../AdminClass/compra-accesorio';
import { CompraJuego } from '../../AdminClass/compra-juego';
import { CookieService } from 'ngx-cookie-service';

declare var paypal;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public Id:any =null;
  public admin:any =null;
  numProductosCarrito = 0;
  PrecioTotal=0;
  listaCarrito: CarritoCompra[] = [];
  
  @ViewChild('paypal',{ static: true }) paypalElement : ElementRef;

  producto={
    descripcion: 'ventass',
    precio : 500
  }


  constructor(private gestionCarritoService:GestionCarritoService,
              private adminService:AdminService, 
              private cookieService:CookieService,
              private snackBar: MatSnackBar) { }
            
  ngOnInit(): void {        
    this.gestionCarritoService.PrecioTotal.subscribe(valor => this.PrecioTotal = valor);
    this.gestionCarritoService.numProductosCarrito.subscribe(valor => this.numProductosCarrito = valor);
    

    this.Id = localStorage.getItem('Id');
    this.admin = localStorage.getItem('admi');
    this.getCarrito();

    paypal
      .Buttons({
        createOrder: (data, actions)=>{
          return actions.order.create({
            purchase_units:[
              {
                descripcion:this.producto.descripcion,
                amount :{
                  currency_code: 'EUR',
                  value        : this.PrecioTotal
                }
              }
            ]
          })
        },
        onApprove : async (data , actions)=>{
          const order = await actions.order.capture();
          
         this.GuardarCompra();
          
        },
        onError: err=>{
          console.log(err);
          
        }
      })
        .render( this.paypalElement.nativeElement );
  }

  getCarrito(){
    this.listaCarrito = this.gestionCarritoService.getCarrito();
  }
  borrar(articulo){
    this.gestionCarritoService.eliminarDelCarrito(articulo);
    this.getCarrito();
  }
  borrarTodo(){
    this.gestionCarritoService.limpiarCarrito();
    this.getCarrito();
  }

  CompraAccesorioModel = new CompraAccesorio(undefined,undefined,undefined,"","","","",undefined,undefined);
  CompraJuegoModel = new CompraJuego(undefined,undefined,undefined,"","","","",undefined,undefined);

  GuardarCompra(){

    this.listaCarrito.forEach(element => {
      
      if(element.Id_Juego==null){
        this.CompraAccesorioModel.Id_Accesorios=element.Id_Accesorios;
        this.CompraAccesorioModel.Id_User=this.Id;
        this.CompraAccesorioModel.Id_Plaforma=element.Id_Plataforma;
        this.CompraAccesorioModel.Precio=element.Precio;
        this.CompraAccesorioModel.Edicion=element.Edicion;
        this.CompraAccesorioModel.Cantidad=element.Cantidad;

        console.log(this.CompraAccesorioModel);
      
        this.adminService.addCompraAccesorioCarrito(this.CompraAccesorioModel).subscribe((datos) => {  
          if(datos=="NoStock"){
            this.snackBar.open('No hay existencias', undefined, {
              duration: 2000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }else if(datos=="error"){
            this.snackBar.open('Error al realizar la compra', undefined, {
              duration: 2000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }else{
            this.snackBar.open('Compra realizada', undefined, {
              duration: 2000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            this.borrar(element);
          }
           
         })
        
         
      }else{
        
        this.CompraJuegoModel.Id_Juego=element.Id_Juego;
        this.CompraJuegoModel.Id_User=this.Id;
        this.CompraJuegoModel.Id_Plaforma=element.Id_Plataforma;
        this.CompraJuegoModel.Precio=element.Precio;
        this.CompraJuegoModel.Edicion=element.Edicion;
        this.CompraJuegoModel.Cantidad=element.Cantidad;

        this.adminService.addCompraJuegoCarrito(this.CompraJuegoModel).subscribe((datos) => {  
          if(datos=="NoStock"){
            this.snackBar.open('No hay existencias de '+element.Nombre_Juego+" de "+element.Nombre_Plataforma, undefined, {
              duration: 2000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          }else{
            this.snackBar.open('Compra realizada', undefined, {
              duration: 2000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            this.borrar(element);
          }
          
         })

      }
    });
    
  }

    
}
