import { Component, OnInit } from '@angular/core';
import { Accesorio } from '../../../../AdminClass/accesorio';
import { Categoria } from '../../../../AdminClass/categoria';
import { AdminService } from '../../../../servicios/admin.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-accesorio',
  templateUrl: './editar-accesorio.component.html',
  styleUrls: ['./editar-accesorio.component.css']
})
export class EditarAccesorioComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  AccesorioSelecionada = new Accesorio(undefined,"","","",undefined,undefined,undefined,"");

  LoginAccesorioEdit = this.formBuild.group({
    Nombre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    Descripcion: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(1000)]],
    Portada: ['',[Validators.required]],
   });

  constructor(private router: Router,
              private adminService:AdminService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id_Accesorios = Number(this.route.snapshot.paramMap.get("Id"));
    this.adminService.getAccesorioSelecionada(Id_Accesorios).subscribe((CompraAccesorioSelecionada: Accesorio) => this.AccesorioSelecionada = CompraAccesorioSelecionada);
    
  }

  onSubmit() {
    this.adminService.EditAccesorio(this.AccesorioSelecionada).subscribe(() => {
      this.snackBar.open('Accesorio actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  volver() {
    this.router.navigate(['/Panel/Accesorio']);
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginAccesorioEdit.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginAccesorioEdit.get(field)?.touched || this.LoginAccesorioEdit.get(field)?.dirty) && !this.LoginAccesorioEdit.get(field)?.valid );
  }

}
