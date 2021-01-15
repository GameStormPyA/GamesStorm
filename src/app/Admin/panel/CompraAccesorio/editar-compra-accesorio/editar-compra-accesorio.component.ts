import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { CompraAccesorio } from '../../../../AdminClass/compra-accesorio';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-compra-accesorio',
  templateUrl: './editar-compra-accesorio.component.html',
  styleUrls: ['./editar-compra-accesorio.component.css']
})
export class EditarCompraAccesorioComponent implements OnInit {


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  CompraAccesorioSelecionada = new CompraAccesorio(undefined,undefined,undefined,"","","","",undefined,undefined);

  LoginCompraAccesorio = this.formBuild.group({
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
    let Id_Accesorios = Number(this.route.snapshot.paramMap.get("Id_Accesorios"));
    let Id_User = Number(this.route.snapshot.paramMap.get("Id_User"));
    let Id_Plaforma = Number(this.route.snapshot.paramMap.get("Id_Plaforma"));
    this.adminService.getCompraAccesorioSelecionada(Id_Accesorios,Id_User,Id_Plaforma).subscribe((CompraAccesorioSelecionada: CompraAccesorio) => this.CompraAccesorioSelecionada = CompraAccesorioSelecionada);
    
  }

  onSubmit() {
    this.adminService.EditCompraAccesorio(this.CompraAccesorioSelecionada).subscribe(() => {
      this.snackBar.open('Compra actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  volver() {
    this.router.navigate(['/Panel/ComprarAccesorio']);
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginCompraAccesorio.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginCompraAccesorio.get(field)?.touched || this.LoginCompraAccesorio.get(field)?.dirty) && !this.LoginCompraAccesorio.get(field)?.valid );
  }
}
