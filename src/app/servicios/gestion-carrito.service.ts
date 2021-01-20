import { Injectable,EventEmitter } from '@angular/core';
import { CarritoCompra} from '../Class/carrito-compra';

@Injectable({
  providedIn: 'root'
})
export class GestionCarritoService {

  numProductosCarrito: any = new EventEmitter();
  PrecioTotal:any = new EventEmitter();

  constructor() { }

  anadirEnCarrito(articulo): string {
    if (!localStorage.getItem('carrito')) { this.crearCarrito(); }
    const lista: CarritoCompra[] = JSON.parse(localStorage.getItem('carrito') || 'Default Value');
    let i = 0;
    let x = 0;
    if(!articulo.Id_Juego){     
       lista.forEach(coocki => {
          if(coocki.Id_Accesorios === articulo.Id_Accesorios && coocki.Id_Plataforma === articulo.Id_Plataforma){
            lista[x].Cantidad = lista[x].Cantidad+1;
            i++;
          }
          x++;
       });

        if (i === 0) {
          lista.push(articulo);
        } 
    }
    if(!articulo.Id_Accesorios){
      lista.forEach(coocki => {
        if(coocki.Id_Juego === articulo.Id_Juego && coocki.Id_Plataforma === articulo.Id_Plataforma){
          lista[x].Cantidad = lista[x].Cantidad+1;
          i++;
        }
        x++;
     });
      if (i === 0) {
        lista.push(articulo);
      } 
    }
    localStorage.setItem('carrito', JSON.stringify(lista));
    return 'OK';
  }

  crearCarrito() {
    localStorage.setItem('carrito','[]');
    this.numProductosCarrito.emit(0);
  }

  getCarrito(): CarritoCompra[] {
    const lista = JSON.parse(localStorage.getItem('carrito') || 'Default Value');
    let i=0;
    let total =0;
    let numProductos = 0;
    while(i <lista.length){
      numProductos+=lista[i].Cantidad; 
      total+=lista[i].Precio*lista[i].Cantidad;
      i++;
    }
    this.numProductosCarrito.emit(numProductos);
    this.PrecioTotal.emit(total);
    return lista;
  }

  
  eliminarDelCarrito(articulo): string  {
    if (!localStorage.getItem('carrito')) { this.crearCarrito(); }
    const lista: CarritoCompra[] = JSON.parse(localStorage.getItem('carrito') || 'Default Value');
    let x = 0;
    if(!articulo.Id_Juego){     
       lista.forEach(coocki => {
          if(coocki.Id_Accesorios === articulo.Id_Accesorios && coocki.Id_Plataforma === articulo.Id_Plataforma){
            lista[x].Cantidad = lista[x].Cantidad-1;
            if (lista[x].Cantidad==0) lista.splice(x, 1);
            localStorage.setItem('carrito', JSON.stringify(lista));
          }
          x++;
       });
    }
    if(!articulo.Id_Accesorios){
      lista.forEach(coocki => {
        if(coocki.Id_Juego === articulo.Id_Juego && coocki.Id_Plataforma === articulo.Id_Plataforma){     
          lista[x].Cantidad = lista[x].Cantidad-1;
          if (lista[x].Cantidad==0) lista.splice(x, 1);
            localStorage.setItem('carrito', JSON.stringify(lista));
        }
        x++;
     });
    }
    localStorage.setItem('carrito', JSON.stringify(lista));
    return 'OK';
    
  }
  limpiarCarrito(){
    localStorage.setItem('carrito','[]');
    this.numProductosCarrito.emit(0);
    this.PrecioTotal.emit(0);
  }
  
}
