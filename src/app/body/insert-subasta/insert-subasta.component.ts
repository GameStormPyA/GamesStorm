import { Component, OnInit } from '@angular/core';
import { Subasta } from '../../subasta';
import { Juego } from '../../juego';
import { SubastaService } from '../../servicios/subasta.service';
import { Router } from '@angular/router';
import { Plataforma} from '../../plataforma';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-insert-subasta',
  templateUrl: './insert-subasta.component.html',
  styleUrls: ['./insert-subasta.component.css']
})
export class InsertSubastaComponent implements OnInit {
  
  //myControl = new FormControl();

  public listaJuego: Juego[]=[];

  //public filteredList5 = this.listaJuego.slice();
  
  public listaPlatafroma: Plataforma[]=[];

  LoginSubasta = this.formBuild.group({
    PrecioMin: ['',[Validators.required]],
    TiempoInicio: ['',[Validators.required]],
    HoraInicio: ['',[Validators.required]],
    TiempoFin: ['',[Validators.required]],
    HoraFin: ['',[Validators.required]],
    Id_Juego: ['',[Validators.required]],
    Id_Plataforma: ['',[Validators.required]]
  });

  constructor(private subastaService:SubastaService,
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuild :FormBuilder) {}
  ngOnInit() {
    this.obtenerPlataforma();
    this.obtenerJuego();
    console.log(this.listaJuego);
  }
  
  SubastaModel = new Subasta(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,'','','');

  obtenerJuego(){
    return this.subastaService.getJuego().subscribe((listaJuego: Juego[]) => this.listaJuego = listaJuego);
  }
  
  obtenerPlataforma(){
    return this.subastaService.getPlataforma().subscribe((listaPlatafroma: Plataforma[]) => this.listaPlatafroma = listaPlatafroma);
  }
  onSubmit() {
    this.subastaService.addSubasta(this.SubastaModel).subscribe(() => {
      this.snackBar.open('Subasta guardada', undefined, {
        duration: 1500,
      });
      this.volver();
    })
  }
  volver() {
    this.router.navigate(['/Subastas']);
  }
  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginSubasta.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginSubasta.get(field)?.touched || this.LoginSubasta.get(field)?.dirty) && !this.LoginSubasta.get(field)?.valid );
  }
}
