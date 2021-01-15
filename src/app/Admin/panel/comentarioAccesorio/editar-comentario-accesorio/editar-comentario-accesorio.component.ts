import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { ComentarioAccesorio } from '../../../../AdminClass/comentario-accesorio';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-comentario-accesorio',
  templateUrl: './editar-comentario-accesorio.component.html',
  styleUrls: ['./editar-comentario-accesorio.component.css']
})
export class EditarComentarioAccesorioComponent implements OnInit {

  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ComentarioAccesorioSelecionado = new ComentarioAccesorio(undefined,undefined,"","","");

  LoginComentarioAccesorio = this.formBuild.group({
    Comentario: ['',[Validators.required,Validators.minLength(4)]]
  });
  constructor(private router: Router,
              private adminService:AdminService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id_Accesorio = Number(this.route.snapshot.paramMap.get("Id_Accesorio"));
    let Id_User = Number(this.route.snapshot.paramMap.get("Id_User"));
    this.adminService.getComentarioAccesorioSelecionada(Id_Accesorio,Id_User).subscribe((ComentarioAccesorioSelecionado: ComentarioAccesorio) => this.ComentarioAccesorioSelecionado = ComentarioAccesorioSelecionado);
    
  }

  onSubmit() {
    this.adminService.EditComentarioAccesorio(this.ComentarioAccesorioSelecionado).subscribe(() => {
      this.snackBar.open('Comentario actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  volver() {
    this.router.navigate(['/Panel/ComentarioAccesorio']);
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginComentarioAccesorio.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginComentarioAccesorio.get(field)?.touched || this.LoginComentarioAccesorio.get(field)?.dirty) && !this.LoginComentarioAccesorio.get(field)?.valid );
  }
}

