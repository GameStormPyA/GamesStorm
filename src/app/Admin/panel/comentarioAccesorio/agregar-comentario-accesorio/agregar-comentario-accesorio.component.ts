import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { ComentarioAccesorio } from '../../../../AdminClass/comentario-accesorio';
import { Accesorio } from '../../../../AdminClass/accesorio';
import { User } from '../../../../AdminClass/user';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-comentario-accesorio',
  templateUrl: './agregar-comentario-accesorio.component.html',
  styleUrls: ['./agregar-comentario-accesorio.component.css']
})
export class AgregarComentarioAccesorioComponent implements OnInit {

 

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public listaAccesorio: Accesorio[]=[];
  public listaUser: User[]=[];

  LoginComentarioAccesorio = this.formBuild.group({
    Id_Accesorio: ['',[Validators.required]],
    Id_User: ['',[Validators.required]],
    Comentario: ['',[Validators.required,Validators.minLength(4)]]
  });

  constructor(private adminService:AdminService, 
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuild :FormBuilder) { }

  
 ngOnInit() {
  this.obtenerAccesorio();
  this.obtenerUser();
}

ComentarioAccesorioModel = new ComentarioAccesorio(undefined,undefined,"","","");

obtenerAccesorio(){
  return this.adminService.getAccesorio().subscribe((listaAccesorio: Accesorio[]) => this.listaAccesorio = listaAccesorio);
}
obtenerUser(){
  return this.adminService.getUser().subscribe((listaUser: User[]) => this.listaUser = listaUser);
}

onSubmit() { 
 this.adminService.addComentarioAccesorio(this.ComentarioAccesorioModel).subscribe((datos) => {      
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
  this.router.navigate(['/Panel/ComentarioAccesorio']);
}

getErrorMessage(field:string):string{
  let message ;
 if(this.LoginComentarioAccesorio.get(field)?.errors.required){
    message='debes rellenar el campo';
 }
  return message;
}
isValidField(field:string):boolean{
  return ( (this.LoginComentarioAccesorio.get(field)?.touched || this.LoginComentarioAccesorio.get(field)?.dirty) && !this.LoginComentarioAccesorio.get(field)?.valid );
}
}

