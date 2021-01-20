import { Component, OnInit } from '@angular/core';
import { User } from '../../../../AdminClass/user';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public listaUser: User[]=[];
  columndefs : any[] = ['Nombre','Apellido','Correo','Edad','Administrador','Editar','Eliminar'];
  
  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerUser();
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

  eliminarUser(user: User) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar ${user.Nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteUser(user)
          .subscribe(() => {
            this.obtenerUser();
            this.snackBar.open('User eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }


  obtenerUser(){
    this.adminService.getUser().subscribe(datos => this.listaUser = datos);
  }

}
