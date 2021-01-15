import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { RelacionAccesorio } from '../../../../AdminClass/relacion-accesorio';
import { Plataforma } from '../../../../AdminClass/plataforma';
import { Accesorio } from '../../../../AdminClass/accesorio';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-relacion-accesorio',
  templateUrl: './agregar-relacion-accesorio.component.html',
  styleUrls: ['./agregar-relacion-accesorio.component.css']
})
export class AgregarRelacionAccesorioComponent implements OnInit {

 
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public listaPlataforma: Plataforma[]=[];
  public listaAccesorio: Accesorio[]=[];

  LoginRelacionAccesorio = this.formBuild.group({
    Id_Accesorio: ['',[Validators.required]],
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
  this.obtenerAccesorio();
}

AccesorioModel = new RelacionAccesorio(undefined,undefined,undefined,"",undefined,"","");

obtenerAccesorio(){
  return this.adminService.getAccesorio().subscribe((listaAccesorio: Accesorio[]) => this.listaAccesorio = listaAccesorio);
}
obtenerPlataforma(){
  return this.adminService.getPlataforma().subscribe((listaPlataforma: Plataforma[]) => this.listaPlataforma = listaPlataforma);
}

onSubmit() { 
 this.adminService.addRelacionAccesorio(this.AccesorioModel).subscribe((datos) => {      
   if(datos=="Existe"){
     this.snackBar.open('Relacion ya registrada', undefined, {
       duration: 2000,
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition
     });
   }else{
     this.snackBar.open('Relacion Accesorio Registrado ', undefined, {
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
  this.router.navigate(['/Panel/RelacionAccesorio']);
}

getErrorMessage(field:string):string{
  let message ;
 if(this.LoginRelacionAccesorio.get(field)?.errors.required){
    message='debes rellenar el campo';
 }
  return message;
}
isValidField(field:string):boolean{
  return ( (this.LoginRelacionAccesorio.get(field)?.touched || this.LoginRelacionAccesorio.get(field)?.dirty) && !this.LoginRelacionAccesorio.get(field)?.valid );
}
}



