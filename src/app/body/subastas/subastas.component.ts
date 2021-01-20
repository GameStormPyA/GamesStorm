import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Subasta} from "../../subasta";
import { Puja} from "../../puja";
import { HomeService} from "../../servicios/home.service";
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as countdown from 'countdown';
import { Time } from '@angular/common';
import * as $ from 'jquery';
import { GestionCarritoService } from '../../servicios/gestion-carrito.service';
import { ProductosService } from '../../servicios/productos.service';
import { CarritoCompra } from '../../Class/carrito-compra';
import { JuegosList } from '../../Class/juegos-list';
import { AccesoriosList } from '../../Class/accesorios-list';
import { HeadComponent} from '../../head/head.component';


interface Tiempo{
  hours: number,
  minutes: number,
  seconds: number,
  days: number
}
@Component({
  selector: 'app-subastas',
  templateUrl: './subastas.component.html',
  styleUrls: ['./subastas.component.css']
})
export class SubastasComponent implements OnInit {

  public Id:any =null;
  public admin:any =null;


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public listaSubastas: Subasta[]=[];

  public TiempoRestante : Tiempo ;
  public TiempId : number ;

  IdSubasta = 0;

  TiempoInicio;
  HoraInicio;
  TiempoFin;
  HoraFin;
  dateInicio : Date;
  dateFin : Date ;
  PrecioMinimo:number;

  SubastaHome = this.formBuild.group({
    Pujado: ['',[Validators.required]]
  });

  
  constructor(private homeService:HomeService,
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuild :FormBuilder,
              private gestionCarritoService:GestionCarritoService,
              private productosService:ProductosService) { }

  ngOnInit(): void {
    this.Id = localStorage.getItem('Id');
    this.admin = localStorage.getItem('admi');

    this.obtenerSubasta();
    setInterval(() => {
      this.obtenerSubasta(); 
      }, 4000);

    this.homeService.getSubastaActivasUno().subscribe(datos=>{       
    this.TiempoInicio=datos[0].TiempoInicio;
    this.HoraInicio=datos[0].HoraInicio;
    this.TiempoFin=datos[0].TiempoFin;
    this.HoraFin=datos[0].HoraFin;

    this.PrecioMinimo=datos[0].Id;  

    this.IdSubasta=datos[0].Id;

    this.dateInicio = new Date(this.TiempoInicio+" "+this.HoraInicio);
    this.dateFin = new Date(this.TiempoFin+" "+this.HoraFin);
    
    this.TiempId = countdown(this.dateFin ,(ts)=>{
      //console.log(ts);
      this.TiempoRestante = ts;
    },countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
    });
  }

  PujaSubastaModel = new Puja(undefined,undefined,undefined,undefined,undefined,undefined,'','','');
  

  ngOnDestroy(){
    if(this.TiempId){
      clearInterval(this.TiempId)
    }
  }
  
  obtenerSubasta(){
    return this.homeService.getSubastaActivasUno().subscribe((listaSubastas: Subasta[]) => this.listaSubastas = listaSubastas);
  }

  pujar(Subasta) {
    this.Id = localStorage.getItem('Id');
    const PujaSubasta = new Puja(undefined,undefined,undefined,undefined,undefined,undefined,"","","");
    PujaSubasta.Id_Cliente=this.Id;
    PujaSubasta.Id_Subasta=parseInt(Subasta.Id);
    PujaSubasta.Puja=this.PujaSubastaModel.Puja;
    
    if(Subasta.PrecioMin < PujaSubasta.Puja){
      this.homeService.addPuja(PujaSubasta).subscribe((datos) => {
        if(datos=="Update"){
          this.snackBar.open('Puja Actualizada', undefined, {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
        }
        if(datos=="Insert"){
          this.snackBar.open('Puja Realizada', undefined, {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
          });
        }
        $('#color').css("background-color", "ForestGreen");
        this.obtenerSubasta();
        
        
      })
    }else{
      this.snackBar.open('La puja es menor a lo requerido para pujar', undefined, {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
    }
  }
  getErrorMessage(field:string):string{
    let message ;
    if(this.SubastaHome.get(field)?.errors.required){
      message='Tu puja debe ser mayor ';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.SubastaHome.get(field)?.touched || this.SubastaHome.get(field)?.dirty) && !this.SubastaHome.get(field)?.valid );
  }

}
