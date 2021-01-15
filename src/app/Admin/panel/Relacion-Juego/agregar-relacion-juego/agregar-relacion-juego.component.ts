import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { RelacionJuego } from '../../../../AdminClass/relacion-juego';
import { Plataforma } from '../../../../AdminClass/plataforma';
import { Juego } from '../../../../AdminClass/juego';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-relacion-juego',
  templateUrl: './agregar-relacion-juego.component.html',
  styleUrls: ['./agregar-relacion-juego.component.css']
})
export class AgregarRelacionJuegoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public listaPlataforma: Plataforma[]=[];
  public listaJuego: Juego[]=[];

  LoginRelacionJuego = this.formBuild.group({
    Id_Juego: ['',[Validators.required]],
    Id_Plataforma: ['',[Validators.required]],
    Precio: ['',[Validators.required,Validators.min(1)]],
    Edicion: ['',[Validators.required]],
    Stock: ['',[Validators.required,Validators.min(0)]]
  });

  constructor(private adminService:AdminService, 
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuild :FormBuilder) { }

  
 ngOnInit() {
  this.obtenerPlataforma();
  this.obtenerJuego();
}

JuegoModel = new RelacionJuego(undefined,undefined,undefined,"",undefined,"","");

obtenerJuego(){
  return this.adminService.getJuegos().subscribe((listaJuego: Juego[]) => this.listaJuego = listaJuego);
}
obtenerPlataforma(){
  return this.adminService.getPlataforma().subscribe((listaPlataforma: Plataforma[]) => this.listaPlataforma = listaPlataforma);
}

onSubmit() { 
 this.adminService.addRelacionJuego(this.JuegoModel).subscribe((datos) => {      
   if(datos=="NoExiste"){
     this.snackBar.open('no hay registro de ese juego con la plataforma indicada', undefined, {
       duration: 2000,
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition
     });
   }else{
     this.snackBar.open('RelacionJuego Registrado ', undefined, {
       duration: 2000,
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition,
       
       
     });
     console.log(datos);
     this.volver();
   }
 })
}
volver() {
  this.router.navigate(['/Panel/RelacionJuego']);
}

getErrorMessage(field:string):string{
  let message ;
 if(this.LoginRelacionJuego.get(field)?.errors.required){
    message='debes rellenar el campo';
 }
  return message;
}
isValidField(field:string):boolean{
  return ( (this.LoginRelacionJuego.get(field)?.touched || this.LoginRelacionJuego.get(field)?.dirty) && !this.LoginRelacionJuego.get(field)?.valid );
}
}


