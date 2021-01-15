import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { CompraJuego } from '../../../../AdminClass/compra-juego';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-editar-compra-juego',
  templateUrl: './editar-compra-juego.component.html',
  styleUrls: ['./editar-compra-juego.component.css']
})
export class EditarCompraJuegoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  CompraJuegoSelecionada = new CompraJuego(undefined,undefined,undefined,"","","","",undefined,undefined);

  LoginCompraJuego = this.formBuild.group({
    Precio: ['',[Validators.required,Validators.min(0)]],
    Edicion: ['',[Validators.required]],
    Cantidad: ['',[Validators.required,Validators.min(0)]],
  });
  constructor(private router: Router,
              private adminService:AdminService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id_Juego = Number(this.route.snapshot.paramMap.get("Id_Juego"));
    let Id_User = Number(this.route.snapshot.paramMap.get("Id_User"));
    let Id_Plaforma = Number(this.route.snapshot.paramMap.get("Id_Plaforma"));
    this.adminService.getCompraJuegoSelecionada(Id_Juego,Id_User,Id_Plaforma).subscribe((CompraJuegoSelecionada: CompraJuego) => this.CompraJuegoSelecionada = CompraJuegoSelecionada);
    
  }

  onSubmit() {
    this.adminService.EditCompraJuego(this.CompraJuegoSelecionada).subscribe(() => {
      this.snackBar.open('Compra actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  volver() {
    this.router.navigate(['/Panel/ComprarJuego']);
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginCompraJuego.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginCompraJuego.get(field)?.touched || this.LoginCompraJuego.get(field)?.dirty) && !this.LoginCompraJuego.get(field)?.valid );
  }
}
