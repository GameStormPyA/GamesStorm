import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { Puja } from '../../../../AdminClass/puja';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder,Validators,FormControl } from '@angular/forms';



@Component({
  selector: 'app-editar-puja',
  templateUrl: './editar-puja.component.html',
  styleUrls: ['./editar-puja.component.css']
})
export class EditarPujaComponent implements OnInit {

  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  PujaSelecionada = new Puja(undefined,undefined,undefined,undefined,undefined,undefined,"","","");

  LoginPuja = this.formBuild.group({
    Puja: ['',[Validators.required,Validators.min(0)]],
    Fecha: ['',[Validators.required]],
    Hora: ['',[Validators.required]]
  });

  constructor(private router: Router,
              private adminService:AdminService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id_Subasta = Number(this.route.snapshot.paramMap.get("Id_Subasta"));
    let Id_User = Number(this.route.snapshot.paramMap.get("Id_User"));
    this.adminService.getPujaSelecionada(Id_Subasta,Id_User).subscribe((PujaSelecionada: Puja) => this.PujaSelecionada = PujaSelecionada);
    
  }

  onSubmit() {
    this.adminService.EditPuja(this.PujaSelecionada).subscribe(() => {
      this.snackBar.open('Puja actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  volver() {
    this.router.navigate(['/Panel/Puja']);
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginPuja.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginPuja.get(field)?.touched || this.LoginPuja.get(field)?.dirty) && !this.LoginPuja.get(field)?.valid );
  }
}

