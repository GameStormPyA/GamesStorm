import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { ComentarioJuego } from '../../../../AdminClass/comentario-juego';
import { Juego } from '../../../../AdminClass/juego';
import { User } from '../../../../AdminClass/user';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-comentario-juego',
  templateUrl: './agregar-comentario-juego.component.html',
  styleUrls: ['./agregar-comentario-juego.component.css']
})
export class AgregarComentarioJuegoComponent implements OnInit {


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public listaJuego: Juego[]=[];
  public listaUser: User[]=[];

  LoginComentarioJuego = this.formBuild.group({
    Id_Juego: ['',[Validators.required]],
    Id_User: ['',[Validators.required]],
    Comentario: ['',[Validators.required,Validators.minLength(4)]]
  });

  constructor(private adminService:AdminService, 
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuild :FormBuilder) { }

  
 ngOnInit() {
  this.obtenerJuego();
  this.obtenerUser();
}

ComentarioJuegoModel = new ComentarioJuego(undefined,undefined,"","","");

obtenerJuego(){
  return this.adminService.getJuegos().subscribe((listaJuego: Juego[]) => this.listaJuego = listaJuego);
}
obtenerUser(){
  return this.adminService.getUser().subscribe((listaUser: User[]) => this.listaUser = listaUser);
}

onSubmit() { 
 this.adminService.addComentarioJuego(this.ComentarioJuegoModel).subscribe((datos) => {      
  if(datos=="Existe"){
    this.snackBar.open('Comentario ya Realizado anteriormente', undefined, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }else{
    this.snackBar.open('Comentario Guardado ', undefined, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition  
   });
   this.volver();
  }  
 })
}

volver() {
  this.router.navigate(['/Panel/ComentarioJuego']);
}

getErrorMessage(field:string):string{
  let message ;
 if(this.LoginComentarioJuego.get(field)?.errors.required){
    message='debes rellenar el campo';
 }
  return message;
}
isValidField(field:string):boolean{
  return ( (this.LoginComentarioJuego.get(field)?.touched || this.LoginComentarioJuego.get(field)?.dirty) && !this.LoginComentarioJuego.get(field)?.valid );
}
}


