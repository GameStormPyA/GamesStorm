import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { User } from '../../../../AdminClass/user';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.component.html',
  styleUrls: ['./agregar-user.component.css']
})
export class AgregarUserComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

LoginUser = this.formBuild.group({
  Nombre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
  Apellido: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
  Cuenta: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
  Direccion: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
  Correo: ['',[Validators.required, Validators.email]],
  Edad: ['',[Validators.required,Validators.min(0),Validators.max(100)]],
  Logo: [''],
  Contrasena: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
  Administrador: ['',[Validators.required]],
 });

 constructor(private adminService:AdminService,
             private snackBar: MatSnackBar,
             private router: Router,
             private formBuild :FormBuilder) {}

 ngOnInit() {
 }
 
 UserModel = new User(undefined,"","","","","",undefined,"","",false);

 onSubmit() {
  console.log(this.UserModel);
  
  this.adminService.addUser(this.UserModel).subscribe((datos) => {      
    if(datos=="Existe"){
      this.snackBar.open('Correo electronico ya registrado', undefined, {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
      $('#Correo').css('border','1px solid red');
    }else{
      this.snackBar.open('Usuario Registrado ', undefined, {
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
   this.router.navigate(['/Panel/User']);
 }


 getErrorMessage(field:string):string{
   let message ;
   if(field=="Edad"){
    message='Rango de edad debe ser 0-100';
  }
  if(field=="Nombre" || field=="Apellido" ){
    message='Caratcter Minimo 2 y Maximo 20';
  }
  if(field=="Cuenta" || field=="Direccion" ){
    message='Caratcter Minimo 2 y Maximo 50';
  }
  if(this.LoginUser.get(field)?.errors.required){
     message='debes rellenar el campo';
  }
   return message;
 }
 isValidField(field:string):boolean{
   return ( (this.LoginUser.get(field)?.touched || this.LoginUser.get(field)?.dirty) && !this.LoginUser.get(field)?.valid );
 }
}

