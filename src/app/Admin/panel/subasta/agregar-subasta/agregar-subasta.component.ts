import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { Subasta } from '../../../../AdminClass/subasta';
import { Juego } from '../../../../AdminClass/juego';
import { Plataforma } from '../../../../AdminClass/plataforma';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-subasta',
  templateUrl: './agregar-subasta.component.html',
  styleUrls: ['./agregar-subasta.component.css']
})
export class AgregarSubastaComponent implements OnInit {

 //myControl = new FormControl();

 public listaJuego: Juego[]=[];

 //public filteredList5 = this.listaJuego.slice();
 
 public listaPlatafroma: Plataforma[]=[];

 LoginSubasta = this.formBuild.group({
   PrecioMin: ['',[Validators.required,Validators.min(0)]],
   TiempoInicio: ['',[Validators.required]],
   HoraInicio: ['',[Validators.required]],
   TiempoFin: ['',[Validators.required]],
   HoraFin: ['',[Validators.required]],
   Id_Juego: ['',[Validators.required]],
   Id_Plataforma: ['',[Validators.required]],
 });

 constructor(private adminService:AdminService,
             private snackBar: MatSnackBar,
             private router: Router,
             private formBuild :FormBuilder) {}
 ngOnInit() {
   this.obtenerPlataforma();
   this.obtenerJuego();
 }
 
 SubastaModel = new Subasta(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,false,'','');

 obtenerJuego(){
   return this.adminService.getJuegos().subscribe((listaJuego: Juego[]) => this.listaJuego = listaJuego);
 }
 
 obtenerPlataforma(){
   return this.adminService.getPlataforma().subscribe((listaPlatafroma: Plataforma[]) => this.listaPlatafroma = listaPlatafroma);
 }
 onSubmit() {
   this.adminService.addSubasta(this.SubastaModel).subscribe(() => {
     this.snackBar.open('Subasta guardada', undefined, {
       duration: 1500,
     });
     this.volver();
   })
 }
 volver() {
  this.router.navigate(['/Panel/Subasta']);
 }
 getErrorMessage(field:string):string{
   let message ;
   if(this.LoginSubasta.get(field)?.errors.required){
     message='debes rellenar el campo';
   }
   return message;
 }
 isValidField(field:string):boolean{
   return ( (this.LoginSubasta.get(field)?.touched || this.LoginSubasta.get(field)?.dirty) && !this.LoginSubasta.get(field)?.valid );
 }
}

