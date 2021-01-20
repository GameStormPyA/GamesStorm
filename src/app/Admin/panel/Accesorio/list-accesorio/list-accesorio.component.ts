import { Component, OnInit } from '@angular/core';
import { Accesorio } from '../../../../AdminClass/accesorio';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-list-accesorio',
  templateUrl: './list-accesorio.component.html',
  styleUrls: ['./list-accesorio.component.css']
})
export class ListAccesorioComponent implements OnInit {

  public listaAccesorio: Accesorio[]=[];
  columndefs : any[] = ['Nombre','Descripcion','Portada','Categria','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerAccesorio();
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


  eliminarAccesorio(accesorio: Accesorio) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar el accesorio ${accesorio.Nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteAccesorio(accesorio)
          .subscribe(() => {
            this.obtenerAccesorio();
            this.snackBar.open('Accesorio eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }


  obtenerAccesorio(){
    this.adminService.getAccesorio().subscribe(datos => this.listaAccesorio = datos);
  }

}
