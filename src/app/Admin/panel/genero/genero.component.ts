import { Component, OnInit, ViewChild } from '@angular/core';
import { Genero } from '../../../AdminClass/genero';
import { AdminService } from '../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
  
  public disabled : boolean = false;
  public listaGenero: Genero[]=[];
  public listaEditGenero: Genero;
  columndefs : any[] = ['Id','Nombre','Editar','Eliminar'];

  LoginGenero = this.formBuild.group({
    Nombre: ['',[Validators.required]]
  });
  LoginEditGenero = this.formBuild.group({
    Nombre: ['',[Validators.required]]
  });

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog,
              private snackBar: MatSnackBar,
              private formBuild :FormBuilder,
              private router: Router) { }
 
  ngOnInit() {
    this.obtenerGenero();
  }
  //Buscador de juegos 
   filterPost = "";
 

   // paginacion de los Juegos
   handlePage(e: PageEvent){
     this.page_size = e.pageSize
     this.page_number = e.pageIndex + 1
   }
   page_size:number = 6 ;
   page_number = 1 ;
   pageSizeOptions = [6,12,24]

  GeneroModel = new Genero(undefined,'');
  GeneroEditModel = new Genero(undefined,'');


  eliminarGenero(genero: Genero) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar ${genero.Nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteGenero(genero)
          .subscribe(() => {
            this.obtenerGenero();
            this.snackBar.open('Genero eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }
  //Desabiltar
  EditarGenero(genero: Genero){
    this.disabled=true;
    this.listaEditGenero = genero ;
  }
  cancelar(){
    this.disabled=false;
    this.listaEditGenero = {Id:0,Nombre:""} ;
  }
  //get list
  obtenerGenero(){
    this.adminService.getGenero().subscribe((listaGenero: Genero[]) => this.listaGenero = listaGenero); 
  }
  //Insert 
  onSubmit() {
    this.adminService.addGenero(this.GeneroModel).subscribe(() => {
      this.snackBar.open('Genero guardada', undefined, {
        duration: 1500,
      });
    })
  }
  //Update
  Submit(){
    this.adminService.EditGenero(this.listaEditGenero).subscribe(() => {
      this.snackBar.open('Genero actualizada', undefined, {
        duration: 1500,
      });
      this.obtenerGenero();
    });
      console.log(this.listaEditGenero);
  }
  //validate message
  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginGenero.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    if(this.LoginEditGenero.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return (( (this.LoginGenero.get(field)?.touched || this.LoginGenero.get(field)?.dirty) && !this.LoginGenero.get(field)?.valid ) || ((this.LoginEditGenero.get(field)?.touched || this.LoginEditGenero.get(field)?.dirty) && !this.LoginEditGenero.get(field)?.valid));
  }
}