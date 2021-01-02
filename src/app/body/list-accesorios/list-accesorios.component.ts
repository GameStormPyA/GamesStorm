
import { Component, OnInit, ViewChild } from '@angular/core';
import { Accesorios } from '../../accesorios';
import { AccesoriosService } from '../../servicios/accesorios.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-accesorios',
  templateUrl: './list-accesorios.component.html',
  styleUrls: ['./list-accesorios.component.css']
})
export class ListAccesoriosComponent  { 
  public listaAccesorios: Accesorios[]=[];
  columndefs : any[] = ['Nombre','Descripcion','Edicion','Stock','Precio','Editar','Eliminar'];
  dataSource =new MatTableDataSource(this.listaAccesorios);

  constructor(private accesoriosService:AccesoriosService, public dialogo: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerAccesorios();
  }
  eliminarAccesorios(accesorios: Accesorios) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar ${accesorios.Nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.accesoriosService
          .DeleteAccesorios(accesorios)
          .subscribe(() => {
            this.obtenerAccesorios();
            this.snackBar.open('Accesorio eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  obtenerAccesorios(){
    return this.accesoriosService.getAccesorios().subscribe((listaAccesorios: Accesorios[]) => this.listaAccesorios = listaAccesorios);
  }

  
}
