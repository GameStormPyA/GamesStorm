import { Component, OnInit } from '@angular/core';
import { Subasta } from '../../subasta';
import { SubastaService } from '../../servicios/subasta.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-subasta',
  templateUrl: './list-subasta.component.html',
  styleUrls: ['./list-subasta.component.css']
})
export class ListSubastaComponent implements OnInit {
  public listaSubastas: Subasta[]=[];
  columndefs : any[] = ['Nombre_Juego','Nombre_Plataforma','PrecioMin','TiempoInicio','HoraInicio','TiempoFin','HoraFin','Nombre_Genero','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaSubastas);

  constructor(private subastaService:SubastaService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerSubasta();
  }

  eliminarSubasta(subasta: Subasta) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar ${subasta.Nombre_Juego}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.subastaService
          .DeleteSubasta(subasta)
          .subscribe(() => {
            this.obtenerSubasta();
            this.snackBar.open('Subasta eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }


  obtenerSubasta(){
    return this.subastaService.getSubasta().subscribe((listaSubastas: Subasta[]) => this.listaSubastas = listaSubastas);
  }

}
