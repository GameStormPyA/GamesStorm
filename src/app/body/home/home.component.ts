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

interface Tiempo{
  hours: number,
  minutes: number,
  seconds: number,
  days: number
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public TiempoRestante : Tiempo ;
  public TiempId : number = null;
  
  public listaSubastas: Subasta[]=[];

  IdSubasta = 0;

  TiempoInicio;
  HoraInicio;
  TiempoFin;
  HoraFin;
  dateInicio : Date;
  dateFin : Date ;


  SubastaHome = this.formBuild.group({
    Pujado: ['',[Validators.required,Validators.min(0)]]
  });
  PujaSubastaModel = new Puja(this.IdSubasta,undefined,undefined,undefined,undefined,undefined,'','','');
  
  constructor(private homeService:HomeService,
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuild :FormBuilder) { }

  slides = [{'image': '../../../assets/image/Carrusel/fifa21.jpg','Text':'FIFA 21'},
            {'image': '../../../assets/image/Carrusel/nfl.jpg','Text':'NFL 21'},
            {'image': '../../../assets/image/Carrusel/starwars.jpg','Text':'Star Wars: Squadrons'}, 
            {'image': '../../../assets/image/Carrusel/carrusel.jpg','Text':'GHOSTRUNNER'}, 
            {'image': '../../../assets/image/Carrusel/7761.jpg','Text':'the sims snowy escape'}];
  
  ngOnInit(): void {
    this.obtenerSubasta();
    this.homeService.getSubastaActivasUno().subscribe(datos=>{ 
    this.TiempoInicio=datos[0].TiempoInicio;
    this.HoraInicio=datos[0].HoraInicio;
    this.TiempoFin=datos[0].TiempoFin;
    this.HoraFin=datos[0].HoraFin;

    this.IdSubasta=datos[0].Id;

    this.dateInicio = new Date(this.TiempoInicio+" "+this.HoraInicio);
    this.dateFin = new Date(this.TiempoFin+" "+this.HoraFin);
    
    this.TiempId = countdown(this.dateFin ,(ts)=>{
      console.log(ts);
      
      this.TiempoRestante = ts;
    },countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
    });
    
  }

  ngOnDestroy(){
    if(this.TiempId){
      clearInterval(this.TiempId)
    }
  }

  obtenerSubasta(){
    return this.homeService.getSubastaActivasUno().subscribe((listaSubastas: Subasta[]) => this.listaSubastas = listaSubastas);
  }

  onSubmit() {
    this.homeService.addPuja(this.PujaSubastaModel).subscribe((datos) => {
      if(datos=="SinSesion"){
        this.snackBar.open('Debes iniciar sesion', undefined, {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
      }else{
        this.snackBar.open('Puja Realizada', undefined, {
          duration: 1500,
      });
    }
    })
    
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
