import { Component, OnInit } from '@angular/core';
import { Puja } from '../../../../AdminClass/puja';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-puja',
  templateUrl: './list-puja.component.html',
  styleUrls: ['./list-puja.component.css']
})
export class ListPujaComponent implements OnInit {

 
  public listaPuja: Puja[]=[];
  columndefs : any[] = ['Id Subasta','Juego','Plataforma','Puja','Fecha Puja','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerPuja();
  }

  eliminarPuja(puja: Puja) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar la puja ${puja.Nombre_juego} de ${puja.Nombre_Plataforma}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeletePuja(puja)
          .subscribe((datos) => {
            this.obtenerPuja();
            this.snackBar.open('Puja eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }


  obtenerPuja(){
    return this.adminService.getPuja().subscribe((listaPuja: Puja[]) => this.listaPuja = listaPuja);
  }

}


