import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { CompraAccesorio } from '../../../../AdminClass/compra-accesorio';
import { Accesorio } from '../../../../AdminClass/accesorio';
import { User } from '../../../../AdminClass/user';
import { Plataforma } from '../../../../AdminClass/plataforma';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-compra-accesorio',
  templateUrl: './agregar-compra-accesorio.component.html',
  styleUrls: ['./agregar-compra-accesorio.component.css']
})
export class AgregarCompraAccesorioComponent implements OnInit {


 
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public listaAccesorio: Accesorio[]=[];
  public listaUser: User[]=[];
  public listaPlataforma: Plataforma[]=[];

  LoginCompraAccesorio = this.formBuild.group({
    Id_Accesorios: ['',[Validators.required]],
    Id_User: ['',[Validators.required]],
    Id_Plaforma: ['',[Validators.required]],
    Precio: ['',[Validators.required,Validators.min(0)]],
    Edicion: ['',[Validators.required]],
    Cantidad: ['',[Validators.required,Validators.min(0)]]
  });

  constructor(private adminService:AdminService, 
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuild :FormBuilder) { }

  
 ngOnInit() {
  this.obtenerAccesorio();
  this.obtenerUser();
  this.obtenerPlataforma();
}

CompraAccesorioModel = new CompraAccesorio(undefined,undefined,undefined,"","","","",undefined,undefined);

obtenerAccesorio(){
  return this.adminService.getAccesorio().subscribe((listaAccesorio: Accesorio[]) => this.listaAccesorio = listaAccesorio);
}
obtenerUser(){
  return this.adminService.getUser().subscribe((listaUser: User[]) => this.listaUser = listaUser);
}
obtenerPlataforma(){
  return this.adminService.getPlataforma().subscribe((listaPlataforma: Plataforma[]) => this.listaPlataforma = listaPlataforma);
}

onSubmit() { 
 this.adminService.addCompraAccesorio(this.CompraAccesorioModel).subscribe((datos) => {  
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
  this.router.navigate(['/Panel/ComprarAccesorio']);
}

getErrorMessage(field:string):string{
  let message ;
 if(this.LoginCompraAccesorio.get(field)?.errors.required){
    message='debes rellenar el campo';
 }
  return message;
}
isValidField(field:string):boolean{
  return ( (this.LoginCompraAccesorio.get(field)?.touched || this.LoginCompraAccesorio.get(field)?.dirty) && !this.LoginCompraAccesorio.get(field)?.valid );
}
}


