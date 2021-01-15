import { Component, OnInit } from '@angular/core';
import { RelacionJuego } from '../../../../AdminClass/relacion-juego';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-relacion-juego',
  templateUrl: './lista-relacion-juego.component.html',
  styleUrls: ['./lista-relacion-juego.component.css']
})
export class ListaRelacionJuegoComponent implements OnInit {
  
  public listaRelacionJuego: RelacionJuego[]=[];
  columndefs : any[] = ['Juego','Plataforma','Precio','Edicion','Stock','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerRelacionJuego();
  }

  eliminarRelacionJuego(relacionJuego: RelacionJuego) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar el juego ${relacionJuego.Nombre_Juego} de ${relacionJuego.Nombre_Plataforma}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteRelacionJuego(relacionJuego)
          .subscribe((datos) => {
            this.obtenerRelacionJuego();
            this.snackBar.open('Juego eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }


  obtenerRelacionJuego(){
    return this.adminService.getRelacionJuego().subscribe((listaRelacionJuego: RelacionJuego[]) => this.listaRelacionJuego = listaRelacionJuego);
  }

}

