import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { GestionCarritoService } from '../../servicios/gestion-carrito.service';
import { ActivatedRoute,Router} from '@angular/router';
import { AccesoriosList } from '../../Class/accesorios-list';
import { CarritoCompra } from '../../Class/carrito-compra';
import * as $ from 'jquery';

@Component({
  selector: 'app-mostrar-accesorio',
  templateUrl: './mostrar-accesorio.component.html',
  styleUrls: ['./mostrar-accesorio.component.css']
})
export class MostrarAccesorioComponent implements OnInit {

  public AccesorioSelect: AccesoriosList[]=[];

  constructor(private ProductosService:ProductosService,
              private router:Router,
              private route:ActivatedRoute,
              private gestionCarritoService:GestionCarritoService) { }

  ngOnInit(): void {
    let Id_Accesorio = Number(this.route.snapshot.paramMap.get("Id_Accesorio"));
    let Id_Plataforma = Number(this.route.snapshot.paramMap.get("Id_Plataforma"));
    this.ProductosService.getAccesorioSelect(Id_Accesorio,Id_Plataforma).subscribe( (datos : AccesoriosList[] )=> this.AccesorioSelect = datos);
    
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
