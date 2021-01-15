import { Component, OnInit } from '@angular/core';
import { ComentarioAccesorio } from '../../../../AdminClass/comentario-accesorio';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-comentario-accesorio',
  templateUrl: './list-comentario-accesorio.component.html',
  styleUrls: ['./list-comentario-accesorio.component.css']
})
export class ListComentarioAccesorioComponent implements OnInit {

  public listaComentarioAccesorio: ComentarioAccesorio[]=[];

  columndefs : any[] = ['Accesorio','Usuario','Comentario','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerComentarioAccesorio();
  }

  eliminarComentarioAccesorio(comentarioAccesorio: ComentarioAccesorio) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar el comentario de ${comentarioAccesorio.Nombre_User} sobre ${comentarioAccesorio.Nombre_Accesorio}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteComentarioAccesorio(comentarioAccesorio)
          .subscribe((datos) => {
            this.obtenerComentarioAccesorio();
            this.snackBar.open('Comentario eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }


  obtenerComentarioAccesorio(){
    return this.adminService.getComentarioAccesorio().subscribe((listaComentarioAccesorio: ComentarioAccesorio[]) => this.listaComentarioAccesorio = listaComentarioAccesorio);
  }

}


