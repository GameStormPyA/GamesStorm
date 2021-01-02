import { Component, OnInit } from '@angular/core';
import { Puja } from '../../puja';
import { PujaService } from '../../servicios/puja.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"
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
  columndefs : any[] = ['Nombre_Juego',"Nombre_Plataforma",'Nombre_Cliente','Puja','Fecha','Hora','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaPuja);

  constructor(private pujaService:PujaService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerPujas();
  }
  eliminarSubasta(puja: Puja) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar la puja del juego ${puja.Nombre_juego} del cliente  ${puja.Nombre_Cliente} ?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.pujaService
          .DeletePuja(puja)
          .subscribe(() => {
            this.obtenerPujas();
            this.snackBar.open('puja eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }
  obtenerPujas(){
    return this.pujaService.getPujas().subscribe((listaPuja: Puja[]) => this.listaPuja = listaPuja);
  }
}
