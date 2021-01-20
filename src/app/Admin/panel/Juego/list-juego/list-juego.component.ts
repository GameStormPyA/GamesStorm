import { Component, OnInit } from '@angular/core';
import { Juego } from '../../../../AdminClass/juego';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-list-juego',
  templateUrl: './list-juego.component.html',
  styleUrls: ['./list-juego.component.css']
})
export class ListJuegoComponent implements OnInit {
  public listaJuego: Juego[]=[];
  columndefs : any[] = ['Nombre','Descripcion','Portada','Lanzamiento','Video','EdadMin','Genero','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerJuego();
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

  eliminarJuego(juego: Juego) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar el juego ${juego.Nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteJuego(juego)
          .subscribe(() => {
            this.obtenerJuego();
            this.snackBar.open('Juego eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }


  obtenerJuego(){
    return this.adminService.getJuegos().subscribe((listaJuego: Juego[]) => this.listaJuego = listaJuego);
  }

}
