import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from '../../categoria';
import { CategoriaService } from '../../servicios/categoria.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {
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

  constructor(private categoriaService:CategoriaService, 
              public dialogo: MatDialog,
              private snackBar: MatSnackBar,
              private formBuild :FormBuilder,
              private router: Router) { }
 
  ngOnInit() {
    this.obtenerCategorias();
  }

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
        this.categoriaService
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
    this.categoriaService.getCategoria().subscribe((listaCategoria: Categoria[]) => this.listaCategoria = listaCategoria); 
  }
  //Insert 
  onSubmit() {
    this.categoriaService.addCategoria(this.CategoriaModel).subscribe(() => {
      this.snackBar.open('Categoria guardada', undefined, {
        duration: 1500,
      });
      this.obtenerCategorias();
    })
  }
  //Update
  Submit(){
    this.categoriaService.EditCategoria(this.listaEditCategoria).subscribe(() => {
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
