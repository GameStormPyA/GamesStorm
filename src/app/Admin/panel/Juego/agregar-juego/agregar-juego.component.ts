import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { Juego } from '../../../../AdminClass/juego';
import { Genero } from '../../../../AdminClass/genero';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-juego',
  templateUrl: './agregar-juego.component.html',
  styleUrls: ['./agregar-juego.component.css']
})
export class AgregarJuegoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public listaGenero: Genero[]=[];

LoginJuego = this.formBuild.group({
  Nombre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
  Descripcion: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(1000)]],
  Lanzamiento: ['',[Validators.required]],
  Video: ['',[Validators.required]],
  EdadMin: ['',[Validators.required,Validators.min(0),Validators.max(21)]],
  Id_Genero: ['',[Validators.required]]
 });

 constructor(private adminService:AdminService,
             private snackBar: MatSnackBar,
             private router: Router,
             private formBuild :FormBuilder) {}

 ngOnInit() {
   this.obtenerGenero();
 }
 
 JuegoModel = new Juego(0,"","","",undefined,"",undefined,undefined,'','');

 _handleReaderLoader(readerEvent){
    var binaryString = readerEvent.target.result;
    this.JuegoModel.Base64TextoPortada=btoa(binaryString);
 }
selecionarArchivo(event){
  var files= event.target.files;
  var file= files[0];
  this.JuegoModel.Portada=file.name;
  if(file && files){
    var reader = new FileReader();
    reader.onload = this._handleReaderLoader.bind(this);
    reader.readAsBinaryString(file);
  }
}

 onSubmit() {
  
  
  this.adminService.addJuego(this.JuegoModel).subscribe((datos) => {      
    if(datos=="Existe"){
      this.snackBar.open('Juego ya registrado', undefined, {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
    }else{
      this.snackBar.open('Juego Registrado ', undefined, {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        
        
      });
       this.volver();
    }
  })
 }
 volver() {
   this.router.navigate(['/Panel/Juego']);
 }

 obtenerGenero(){
   this.adminService.getGenero().subscribe(datos => this.listaGenero = datos);
}

 getErrorMessage(field:string):string{
   let message ;
  if(this.LoginJuego.get(field)?.errors.required){
     message='debes rellenar el campo';
  }
   return message;
 }
 isValidField(field:string):boolean{
   return ( (this.LoginJuego.get(field)?.touched || this.LoginJuego.get(field)?.dirty) && !this.LoginJuego.get(field)?.valid );
 }
}
