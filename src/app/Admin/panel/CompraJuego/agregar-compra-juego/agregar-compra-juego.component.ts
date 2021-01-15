import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { CompraJuego } from '../../../../AdminClass/compra-juego';
import { Juego } from '../../../../AdminClass/juego';
import { User } from '../../../../AdminClass/user';
import { Plataforma } from '../../../../AdminClass/plataforma';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-compra-juego',
  templateUrl: './agregar-compra-juego.component.html',
  styleUrls: ['./agregar-compra-juego.component.css']
})
export class AgregarCompraJuegoComponent implements OnInit {

 
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public listaJuego: Juego[]=[];
  public listaUser: User[]=[];
  public listaPlataforma: Plataforma[]=[];

  LoginCompraJuego = this.formBuild.group({
    Id_Juego: ['',[Validators.required]],
    Id_User: ['',[Validators.required]],
    Id_Plaforma: ['',[Validators.required]],
    Precio: ['',[Validators.required,Validators.min(0)]],
    Edicion: ['',[Validators.required]],
    Cantidad: ['',[Validators.required,Validators.min(0)]],
  });

  constructor(private adminService:AdminService, 
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuild :FormBuilder) { }

  
 ngOnInit() {
  this.obtenerJuego();
  this.obtenerUser();
  this.obtenerPlataforma();
}

CompraJuegoModel = new CompraJuego(undefined,undefined,undefined,"","","","",undefined,undefined);

obtenerJuego(){
  return this.adminService.getJuegos().subscribe((listaJuego: Juego[]) => this.listaJuego = listaJuego);
}
obtenerUser(){
  return this.adminService.getUser().subscribe((listaUser: User[]) => this.listaUser = listaUser);
}
obtenerPlataforma(){
  return this.adminService.getPlataforma().subscribe((listaPlataforma: Plataforma[]) => this.listaPlataforma = listaPlataforma);
}

onSubmit() { 
 this.adminService.addCompraJuego(this.CompraJuegoModel).subscribe((datos) => {  
  if(datos=="NoExiste"){
    this.snackBar.open('No Existe o no hay existencias', undefined, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }else{
    this.snackBar.open('Compra Guardado ', undefined, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition  
   });
   this.volver(); 
  }
 })
}


volver() {
  this.router.navigate(['/Panel/ComprarJuego']);
}

getErrorMessage(field:string):string{
  let message ;
 if(this.LoginCompraJuego.get(field)?.errors.required){
    message='debes rellenar el campo';
 }
  return message;
}
isValidField(field:string):boolean{
  return ( (this.LoginCompraJuego.get(field)?.touched || this.LoginCompraJuego.get(field)?.dirty) && !this.LoginCompraJuego.get(field)?.valid );
}
}


