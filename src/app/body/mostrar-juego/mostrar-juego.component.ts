import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { GestionCarritoService } from '../../servicios/gestion-carrito.service';
import { ActivatedRoute,Router} from '@angular/router';
import { JuegosList } from '../../Class/juegos-list';
import { CarritoCompra } from '../../Class/carrito-compra';
import * as $ from 'jquery';

@Component({
  selector: 'app-mostrar-juego',
  templateUrl: './mostrar-juego.component.html',
  styleUrls: ['./mostrar-juego.component.css']
})
export class MostrarJuegoComponent implements OnInit {

  
  public JuegosSelect: JuegosList[]=[];

  constructor(private ProductosService:ProductosService,
              private router:Router,
              private route:ActivatedRoute,
              private gestionCarritoService:GestionCarritoService) { }

  ngOnInit(): void {
    let Id_Juego = Number(this.route.snapshot.paramMap.get("Id_Juego"));
    let Id_Plataforma = Number(this.route.snapshot.paramMap.get("Id_Plataforma"));
    this.ProductosService.getJuegosSelect(Id_Juego,Id_Plataforma).subscribe( (datos : JuegosList[] )=> this.JuegosSelect = datos);
    
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
