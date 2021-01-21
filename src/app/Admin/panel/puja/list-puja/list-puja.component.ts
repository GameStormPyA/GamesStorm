import { Component, OnInit } from '@angular/core';
import { Puja } from '../../../../AdminClass/puja';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

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
    return this.adminService.getPuja().subscribe(datos => this.listaPuja = datos);
  }

}


