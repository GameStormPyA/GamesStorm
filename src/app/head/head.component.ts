import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionCarritoService } from '../servicios/gestion-carrito.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private router: Router,
              private gestionCarritoService:GestionCarritoService) { }
  
  numProductosCarrito = 0;
  public Id:any ;
  public admin:any;

  ngOnInit(): void {
    this.carrito();
    
    this.Id = localStorage.getItem('Id');
    this.admin = localStorage.getItem('admi');
    //window.location.reload();
  }

  carrito(){
    this.gestionCarritoService.numProductosCarrito.subscribe(valor => this.numProductosCarrito = valor);
  }

  Cerrar(){
    localStorage.removeItem('Id');
    localStorage.removeItem('admi');
    window.location.reload();
  }

 
}
