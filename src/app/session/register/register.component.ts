import { Component, OnInit } from '@angular/core';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../servicios/session.service';
import { Usuario } from '../../Class/usuario';
import * as $ from 'jquery';
import { GestionCarritoService } from '../../servicios/gestion-carrito.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public id ;

  LoginRegistro = this.formBuild.group({
    Nombre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    Apellidos: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    Edad: ['',[Validators.required,Validators.min(0),Validators.max(100)]],
    Correo: ['',[Validators.required, Validators.email]],
    Contrasena: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
  });

  constructor(private router: Router,
              private sessionService: SessionService,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder,
              private gestionCarritoService:GestionCarritoService) { }

  ngOnInit(): void {
    if(localStorage.getItem("Id") !== null){
      this.volver();
    }
  }

  RegistroModel = new Usuario(undefined,'','','','',undefined,undefined);

  onSubmit() {
    this.sessionService.Registrar(this.RegistroModel).subscribe((datos) => { 
          
      if(datos=="Existe"){
        this.snackBar.open('Correo electronico ya registrado', undefined, {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
        $('#Correo').css('border','1px solid red');
      }if(datos=="error"){
        this.snackBar.open('error', undefined, {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
        $('#Correo').css('border','1px solid red');
      }else{
        this.snackBar.open('Felicidades te registraste en Game Storm', undefined, {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.grabarLocalStorage();
        this.volver();
      }
    })
    
  }

  volver() {
    this.router.navigate(['/Home']);
  }

  grabarLocalStorage(){
    this.sessionService.getUser(this.RegistroModel).subscribe((datos) => {
       this.id=datos;
       localStorage.setItem("Id",this.id.Id),
       localStorage.setItem("admi",this.id.Administrador)
    }
    );
  }

  getErrorMessage(field:string):string{
    let message ;
    if(field=="Edad"){
      message='Rango de edad debe ser 0-100';
    }
    if(field=="Correo"){
      message='Debes introducir tu correo electronico';
    }
    if(field=="Apellidos" || field=="Nombre" || field=="Contrasena"  ){
      message='Caratcter Minimo 2 y Maximo 20';
    }
    if(this.LoginRegistro.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginRegistro.get(field)?.touched || this.LoginRegistro.get(field)?.dirty) && !this.LoginRegistro.get(field)?.valid );
  }
}
