import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from '../../../AdminClass/categoria';
import { AdminService } from '../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  public disabled : boolean = false;
  public listaCategoria: Categoria[]=[];
  public listaEditCategoria: Categoria;
  columndefs : any[] = ['Id','Nombre','Editar','Eliminar'];

  LoginCategoria = this.formBuild.group({
    Nombre: ['',[Validators.required]]
  });
  LoginEditCategoria = this.formBuild.group({
    Nombre: ['',[Validators.required]]
  });

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog,
              private snackBar: MatSnackBar,
              private formBuild :FormBuilder,
              private router: Router) { }
 
  ngOnInit() {
    this.obtenerCategorias();
  }
   //Buscador de juegos 
   filterPost = "";
 

   // paginacion de los Juegos
   handlePage(e: PageEvent){
     this.page_size = e.pageSize
     this.page_number = e.pageIndex + 1
   }
   page_size:number = 15 ;
   page_number = 1 ;
   pageSizeOptions = [15,30,45]


  CategoriaModel = new Categoria(undefined,'');
  CategoriaEditModel = new Categoria(undefined,'');


  eliminarCategorias(categoria: Categoria) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar ${categoria.Nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteCategoria(categoria)
          .subscribe(() => {
            this.obtenerCategorias();
            this.snackBar.open('Categoria eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }
  //Desabiltar
  EditarCategorias(categoria: Categoria){
    this.disabled=true;
    this.listaEditCategoria = categoria ;
  }
  cancelar(){
    this.disabled=false;
    this.listaEditCategoria = {Id:0,Nombre:""} ;
  }
  //get list
  obtenerCategorias(){
    this.adminService.getCategoria().subscribe(datos => this.listaCategoria = datos); 
  }
  //Insert 
  onSubmit() {
    this.adminService.addCategoria(this.CategoriaModel).subscribe(() => {
      this.snackBar.open('Categoria guardada', undefined, {
        duration: 1500,
      });
      this.obtenerCategorias();
    })
  }
  //Update
  Submit(){
    this.adminService.EditCategoria(this.listaEditCategoria).subscribe(() => {
      this.snackBar.open('Categoria actualizada', undefined, {
        duration: 1500,
      });
      this.obtenerCategorias();
    });
      console.log(this.listaEditCategoria);
  }
  //validate message
  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginCategoria.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    if(this.LoginEditCategoria.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return (( (this.LoginCategoria.get(field)?.touched || this.LoginCategoria.get(field)?.dirty) && !this.LoginCategoria.get(field)?.valid ) || ((this.LoginEditCategoria.get(field)?.touched || this.LoginEditCategoria.get(field)?.dirty) && !this.LoginEditCategoria.get(field)?.valid));
  }
}