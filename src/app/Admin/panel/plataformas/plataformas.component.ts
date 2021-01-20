import { Component, OnInit, ViewChild } from '@angular/core';
import { Plataforma } from '../../../AdminClass/plataforma';
import { AdminService } from '../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent implements OnInit {

  public disabled : boolean = false;
  public listaPlataforma: Plataforma[]=[];
  public listaEditPlataforma: Plataforma;
  columndefs : any[] = ['Id','Nombre','Editar','Eliminar'];

  LoginPlataforma = this.formBuild.group({
    Nombre: ['',[Validators.required]]
  });
  LoginEditPlataforma = this.formBuild.group({
    Nombre: ['',[Validators.required]]
  });

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog,
              private snackBar: MatSnackBar,
              private formBuild :FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.obtenerPlataforma();
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

  PlataformaModel = new Plataforma(undefined,'');
  PlataformaEditModel = new Plataforma(undefined,'');

  eliminarPlataforma(plataforma: Plataforma) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar ${plataforma.Nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeletePlataforma(plataforma)
          .subscribe(() => {
            this.obtenerPlataforma();
            this.snackBar.open('plataforma eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }
  //Desabiltar
  EditarPlataforma(plataforma: Plataforma){
    this.disabled=true;
    this.listaEditPlataforma = plataforma ;
  }
  cancelar(){
    this.disabled=false;
    this.listaEditPlataforma = {Id:0,Nombre:""} ;
  }
  //get list
  obtenerPlataforma(){
    this.adminService.getPlataforma().subscribe((listaPlataforma: Plataforma[]) => this.listaPlataforma = listaPlataforma); 
  }
  //Insert 
  onSubmit() {
    this.adminService.addPlataforma(this.PlataformaModel).subscribe(() => {
      this.snackBar.open('Plataforma guardada', undefined, {
        duration: 1500,
      });
      this.obtenerPlataforma();
    })
  }
  //Update
  Submit(){
    this.adminService.EditPlataforma(this.listaEditPlataforma).subscribe(() => {
      this.snackBar.open('Plataforma actualizada', undefined, {
        duration: 1500,
      });
      this.obtenerPlataforma();
    });
  }
  //validate message
  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginPlataforma.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    if(this.LoginEditPlataforma.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return (( (this.LoginPlataforma.get(field)?.touched || this.LoginPlataforma.get(field)?.dirty) && !this.LoginPlataforma.get(field)?.valid ) || ((this.LoginEditPlataforma.get(field)?.touched || this.LoginEditPlataforma.get(field)?.dirty) && !this.LoginEditPlataforma.get(field)?.valid));
  }

}
