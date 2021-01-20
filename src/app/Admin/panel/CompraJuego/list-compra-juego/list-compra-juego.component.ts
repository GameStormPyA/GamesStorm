import { Component, OnInit } from '@angular/core';
import { CompraJuego } from '../../../../AdminClass/compra-juego';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-compra-juego',
  templateUrl: './list-compra-juego.component.html',
  styleUrls: ['./list-compra-juego.component.css']
})
export class ListCompraJuegoComponent implements OnInit {

  public listaCompraJuego: CompraJuego[]=[];

  columndefs : any[] = ['Juego','Usuario','Plataforma','Precio','Edicion','Cantidad','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerCompraJuego();
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


  eliminarCompraJuego(compraJuego: CompraJuego) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar la compra de ${compraJuego.Nombre_User} sobre ${compraJuego.Nombre_Juego} de ${compraJuego.Nombre_Plaforma}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteCompraJuego(compraJuego)
          .subscribe((date) => {
            this.obtenerCompraJuego();
            this.snackBar.open('Compra eliminada', undefined, {
              duration: 1500,
            });
            console.log(compraJuego);
            
          });
      })
  }


  obtenerCompraJuego(){
    this.adminService.getCompraJuego().subscribe(datos => this.listaCompraJuego = datos);
  }

}
