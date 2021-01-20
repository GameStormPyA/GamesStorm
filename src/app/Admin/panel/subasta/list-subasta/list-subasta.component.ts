import { Component, OnInit } from '@angular/core';
import { Subasta } from '../../../../AdminClass/subasta';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-subasta',
  templateUrl: './list-subasta.component.html',
  styleUrls: ['./list-subasta.component.css']
})
export class ListSubastaComponent implements OnInit {

  
  public listaSubasta: Subasta[]=[];
  columndefs : any[] = ['Juego','Plataforma','Precio Max','Comprador','Fecha Inicio','Fecha Fin','Estado','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerSubasta();
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

  eliminarSubasta(subasta: Subasta) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar la subasta del juego ${subasta.Nombre_Juego} en ${subasta.Nombre_Plataforma}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
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
    return this.adminService.getSubasta().subscribe((listaSubasta: Subasta[]) => this.listaSubasta = listaSubasta);
  }

}
