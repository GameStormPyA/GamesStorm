import { Component, OnInit } from '@angular/core';
import { CompraAccesorio } from '../../../../AdminClass/compra-accesorio';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-compra-accesorio',
  templateUrl: './list-compra-accesorio.component.html',
  styleUrls: ['./list-compra-accesorio.component.css']
})
export class ListCompraAccesorioComponent implements OnInit {

  public listaCompraAccesorio: CompraAccesorio[]=[];

  columndefs : any[] = ['Accesorio','Usuario','Plataforma','Precio','Edicion','Cantidad','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerCompraAccesorio();
  }

  eliminarCompraAccesorio(compraAccesorio: CompraAccesorio) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar la compra de ${compraAccesorio.Nombre_User} sobre ${compraAccesorio.Nombre_Accesorios} de ${compraAccesorio.Nombre_Plaforma}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteCompraAccesorio(compraAccesorio)
          .subscribe(() => {
            this.obtenerCompraAccesorio();
            this.snackBar.open('Compra eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }


  obtenerCompraAccesorio(){
    return this.adminService.getCompraAccesorio().subscribe((listaCompraAccesorio: CompraAccesorio[]) => this.listaCompraAccesorio = listaCompraAccesorio);
  }

}
