import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { Puja } from '../../../../AdminClass/puja';
import { Subasta } from '../../../../AdminClass/subasta';
import { User } from '../../../../AdminClass/user';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-puja',
  templateUrl: './agregar-puja.component.html',
  styleUrls: ['./agregar-puja.component.css']
})
export class AgregarPujaComponent implements OnInit {


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public listaSubasta: Subasta[]=[];
  public listaUser: User[]=[];

  LoginPuja = this.formBuild.group({
    Id_Subasta: ['',[Validators.required]],
    Id_User: ['',[Validators.required]],
    Puja: ['',[Validators.required,Validators.min(0)]],
    Fecha: ['',[Validators.required]],
    Hora: ['',[Validators.required]]
  });

  constructor(private adminService:AdminService, 
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuild :FormBuilder) { }

  
 ngOnInit() {
  this.obtenerSubasta();
  this.obtenerUser();
}

PujaModel = new Puja(undefined,undefined,undefined,undefined,undefined,undefined,"","","");

obtenerSubasta(){
  return this.adminService.getSubasta().subscribe((listaSubasta: Subasta[]) => this.listaSubasta = listaSubasta);
}
obtenerUser(){
  return this.adminService.getUser().subscribe((listaUser: User[]) => this.listaUser = listaUser);
}

onSubmit() { 
 this.adminService.addPuja(this.PujaModel).subscribe(() => {      
     this.snackBar.open('Puja Registrado ', undefined, {
       duration: 2000,
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition  
    });
    this.volver();
 })
}


volver() {
  this.router.navigate(['/Panel/Puja']);
}

getErrorMessage(field:string):string{
  let message ;
 if(this.LoginPuja.get(field)?.errors.required){
    message='debes rellenar el campo';
 }
  return message;
}
isValidField(field:string):boolean{
  return ( (this.LoginPuja.get(field)?.touched || this.LoginPuja.get(field)?.dirty) && !this.LoginPuja.get(field)?.valid );
}
}


