import { Component, OnInit } from '@angular/core';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../servicios/session.service';
import { Usuario } from '../../Class/usuario';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public id ;

  Login = this.formBuild.group({
    Correo: ['',[Validators.required, Validators.email]],
    Contrasena: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
  });

  LoginModel = new Usuario(undefined,'','','','',undefined,undefined);

  constructor(private router: Router,
    private sessionService: SessionService,
    private snackBar:MatSnackBar,
    private cookieService:CookieService,
    private formBuild :FormBuilder) { }

  ngOnInit(): void {
    if(localStorage.getItem("Id") !== null){
      this.volver();
    }
  }
  onSubmit() {
    console.log(this.LoginModel); 
    this.sessionService.Login(this.LoginModel).subscribe((datos) => {   
      console.log(datos);   
      if(datos=="NoExiste"){
        this.snackBar.open('Correo electronico no esta registrado', undefined, {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
      }else if(datos=="ErrorLogin"){
        this.snackBar.open('Incorrecto el Correo o la Contraseña', undefined, {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition
        });
      }else{
        this.snackBar.open('Session iniciada en Game Storm', undefined, {
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
    this.router.navigate(['/']);
  }

  grabarLocalStorage(){
    this.sessionService.getUser(this.LoginModel).subscribe((datos: any) => {
       this.id=datos;
       localStorage.setItem("Id",this.id.Id),
       localStorage.setItem("admi",this.id.Administrador)
      if(this.id.Administrador==1){
        console.log('es admin');
        this.cookieService.set('token_access', datos.accessToken,4,'/');
      }else{
        console.log('No es admin');
      }
    }

    );
  }

  
  

  getErrorMessage(field:string):string{
    let message ;
    if(field=="Correo"){
      message='Debes introducir tu correo electronico';
    }
    if(this.Login.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.Login.get(field)?.touched || this.Login.get(field)?.dirty) && !this.Login.get(field)?.valid );
  }
}
