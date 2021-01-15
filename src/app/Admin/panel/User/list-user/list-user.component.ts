import { Component, OnInit } from '@angular/core';
import { User } from '../../../../AdminClass/user';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public listaUser: User[]=[];
  columndefs : any[] = ['Nombre','Apellido','Cuenta','Direccion','Correo','Edad','Logo','Administrador','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerUser();
  }

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
    return this.adminService.getUser().subscribe((listaUser: User[]) => this.listaUser = listaUser);
  }

}
