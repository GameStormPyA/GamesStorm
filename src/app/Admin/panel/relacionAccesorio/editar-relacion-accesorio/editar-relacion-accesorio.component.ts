import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { RelacionAccesorio } from '../../../../AdminClass/relacion-accesorio';
import { Plataforma } from '../../../../AdminClass/plataforma';
import { Accesorio } from '../../../../AdminClass/accesorio';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';



@Component({
  selector: 'app-editar-relacion-accesorio',
  templateUrl: './editar-relacion-accesorio.component.html',
  styleUrls: ['./editar-relacion-accesorio.component.css']
})
export class EditarRelacionAccesorioComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  RelacionAccesorioSelecion = new RelacionAccesorio(undefined,undefined,undefined,"",undefined,"","");

  public listaPlataforma: Plataforma[]=[];
  public listaAccesorio: Accesorio[]=[];

  LoginRelacionAccesorio = this.formBuild.group({
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
    let Id_Accesorio = Number(this.route.snapshot.paramMap.get("Id_Accesorio"));
    let Id_Plataforma = Number(this.route.snapshot.paramMap.get("Id_Plataforma"));
    this.adminService.getRelacionAccesorioSelecionada(Id_Accesorio,Id_Plataforma).subscribe((RelacionAccesorioSelecion: RelacionAccesorio) => this.RelacionAccesorioSelecion = RelacionAccesorioSelecion);
    
  }

  onSubmit() {
    this.adminService.EditRelacionAccesorio(this.RelacionAccesorioSelecion).subscribe(() => {
      this.snackBar.open('Relacion Accesorio actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  volver() {
    this.router.navigate(['/Panel/RelacionAccesorio']);
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginRelacionAccesorio.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginRelacionAccesorio.get(field)?.touched || this.LoginRelacionAccesorio.get(field)?.dirty) && !this.LoginRelacionAccesorio.get(field)?.valid );
  }
}

