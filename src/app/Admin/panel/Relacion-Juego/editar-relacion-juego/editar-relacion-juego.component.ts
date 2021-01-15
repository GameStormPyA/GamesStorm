import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { RelacionJuego } from '../../../../AdminClass/relacion-juego';
import { Plataforma } from '../../../../AdminClass/plataforma';
import { Juego } from '../../../../AdminClass/juego';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';



@Component({
  selector: 'app-editar-relacion-juego',
  templateUrl: './editar-relacion-juego.component.html',
  styleUrls: ['./editar-relacion-juego.component.css']
})
export class EditarRelacionJuegoComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  RelacionJuegoSelecion = new RelacionJuego(undefined,undefined,undefined,"",undefined,"","");

  public listaPlataforma: Plataforma[]=[];
  public listaJuego: Juego[]=[];

  LoginRelacionJuego = this.formBuild.group({
    Precio: ['',[Validators.required,Validators.min(1)]],
    Edicion: ['',[Validators.required]],
    Stock: ['',[Validators.required,Validators.min(0)]]
  });

  constructor(private router: Router,
              private adminService:AdminService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id_Juego = Number(this.route.snapshot.paramMap.get("Id_Juego"));
    let Id_Plataforma = Number(this.route.snapshot.paramMap.get("Id_Plataforma"));
    this.adminService.getRelacionJuegoSelecionada(Id_Juego,Id_Plataforma).subscribe((RelacionJuegoSelecion: RelacionJuego) => this.RelacionJuegoSelecion = RelacionJuegoSelecion);
    
  }

  onSubmit() {
    this.adminService.EditRelacionJuego(this.RelacionJuegoSelecion).subscribe(() => {
      this.snackBar.open('Relacion Juego actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  volver() {
    this.router.navigate(['/Panel/RelacionJuego']);
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginRelacionJuego.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginRelacionJuego.get(field)?.touched || this.LoginRelacionJuego.get(field)?.dirty) && !this.LoginRelacionJuego.get(field)?.valid );
  }
}
