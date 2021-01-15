import { Component, OnInit } from '@angular/core';
import { ComentarioJuego } from '../../../../AdminClass/comentario-juego';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-comentario-juego',
  templateUrl: './list-comentario-juego.component.html',
  styleUrls: ['./list-comentario-juego.component.css']
})
export class ListComentarioJuegoComponent implements OnInit {

  
  public listaComentarioJuego: ComentarioJuego[]=[];

  columndefs : any[] = ['Juego','Usuario','Comentario','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerComentarioJuego();
  }

  eliminarComentarioJuego(comentarioJuego: ComentarioJuego) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar el comentario de ${comentarioJuego.Nombre_User} sobre ${comentarioJuego.Nombre_Juego}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteComentarioJuego(comentarioJuego)
          .subscribe((datos) => {
            this.obtenerComentarioJuego();
            this.snackBar.open('Comentario eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }
  
  obtenerComentarioJuego(){
    return this.adminService.getComentarioJuego().subscribe((listaComentarioJuego: ComentarioJuego[]) => this.listaComentarioJuego = listaComentarioJuego);
  }

}

