import { Component, OnInit } from '@angular/core';
import { RelacionAccesorio } from '../../../../AdminClass/relacion-accesorio';
import { AdminService } from '../../../../servicios/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-relacion-accesorio',
  templateUrl: './list-relacion-accesorio.component.html',
  styleUrls: ['./list-relacion-accesorio.component.css']
})
export class ListRelacionAccesorioComponent implements OnInit {

  
  public listaRelacionAccesorio: RelacionAccesorio[]=[];
  columndefs : any[] = ['Accesorio','Plataforma','Precio','Edicion','Stock','Editar','Eliminar'];
  //dataSource =new MatTableDataSource(this.listaUser);

  constructor(private adminService:AdminService, 
              public dialogo: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerRelacionAccesorio();
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


  eliminarRelacionAccesorio(relacionAccesorio: RelacionAccesorio) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar el accesorio ${relacionAccesorio.Nombre_Accesorio} de ${relacionAccesorio.Nombre_Plataforma}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.adminService
          .DeleteRelacionAccesorio(relacionAccesorio)
          .subscribe((datos) => {
            this.obtenerRelacionAccesorio();
            this.snackBar.open('Relacion Accesorio eliminada', undefined, {
              duration: 1500,
            });
            console.log(datos);
            
          });
      })
  }


  obtenerRelacionAccesorio(){
    this.adminService.getRelacionAccesorio().subscribe(datos => this.listaRelacionAccesorio = datos);
  }

}

