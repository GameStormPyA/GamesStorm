import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { Accesorio } from '../../../../AdminClass/accesorio';
import { Categoria } from '../../../../AdminClass/categoria';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-accesorio',
  templateUrl: './agregar-accesorio.component.html',
  styleUrls: ['./agregar-accesorio.component.css']
})
export class AgregarAccesorioComponent implements OnInit {


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public listaCategoria: Categoria[]=[];

LoginAccesorio = this.formBuild.group({
  Nombre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
  Descripcion: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(1000)]],
  Portada: ['',[Validators.required]],
  Id_Categoria: ['',[Validators.required]]
 });

 constructor(private adminService:AdminService,
             private snackBar: MatSnackBar,
             private router: Router,
             private formBuild :FormBuilder) {}

 ngOnInit() {
   this.obtenerCategorias();
 }
 
 AccesorioModel = new Accesorio(undefined,"","","",undefined,undefined,undefined,"");

 onSubmit() {
  console.log(this.AccesorioModel);
  
  this.adminService.addAccesorio(this.AccesorioModel).subscribe((datos) => {      
    if(datos=="Existe"){
      this.snackBar.open('Accesorio ya registrado', undefined, {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
    }else{
      this.snackBar.open('Accesorio Registrado ', undefined, {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.volver();
    }
  })
 }
 volver() {
   this.router.navigate(['/Panel/Accesorio']);
 }

 obtenerCategorias(){
  this.adminService.getCategoria().subscribe(datos => this.listaCategoria = datos); 
  }

 getErrorMessage(field:string):string{
   let message ;
  if(this.LoginAccesorio.get(field)?.errors.required){
     message='debes rellenar el campo';
  }
   return message;
 }
 isValidField(field:string):boolean{
   return ( (this.LoginAccesorio.get(field)?.touched || this.LoginAccesorio.get(field)?.dirty) && !this.LoginAccesorio.get(field)?.valid );
 }
}
