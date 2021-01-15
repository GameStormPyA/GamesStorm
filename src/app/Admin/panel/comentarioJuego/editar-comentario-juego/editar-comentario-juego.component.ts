import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { ComentarioJuego } from '../../../../AdminClass/comentario-juego';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-comentario-juego',
  templateUrl: './editar-comentario-juego.component.html',
  styleUrls: ['./editar-comentario-juego.component.css']
})
export class EditarComentarioJuegoComponent implements OnInit {

  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ComentarioJuegoSelecionado = new ComentarioJuego(undefined,undefined,"","","");

  LoginComentarioJuego = this.formBuild.group({
    Comentario: ['',[Validators.required,Validators.minLength(4)]]
  });
  constructor(private router: Router,
              private adminService:AdminService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id_Juego = Number(this.route.snapshot.paramMap.get("Id_Juego"));
    let Id_User = Number(this.route.snapshot.paramMap.get("Id_User"));
    this.adminService.getComentarioJuegoSelecionada(Id_Juego,Id_User).subscribe((ComentarioJuegoSelecionado: ComentarioJuego) => this.ComentarioJuegoSelecionado = ComentarioJuegoSelecionado);
    
  }

  onSubmit() {
    this.adminService.EditComentarioJuego(this.ComentarioJuegoSelecionado).subscribe(() => {
      this.snackBar.open('Comentario actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  volver() {
    this.router.navigate(['/Panel/ComentarioJuego']);
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginComentarioJuego.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginComentarioJuego.get(field)?.touched || this.LoginComentarioJuego.get(field)?.dirty) && !this.LoginComentarioJuego.get(field)?.valid );
  }
}
