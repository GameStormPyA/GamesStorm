import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { User } from '../../../../AdminClass/user';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as $ from 'jquery';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {

  public userSelect: User = new User(undefined,"","","","","",undefined,"","",false);

  LoginUser = this.formBuild.group({
    Nombre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    Apellido: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    Cuenta: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    Direccion: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    Correo: ['',[Validators.required, Validators.email]],
    Edad: ['',[Validators.required,Validators.min(0),Validators.max(100)]],
    Administrador: ['',[Validators.required]],
   });

  constructor(private router: Router,
              private adminService:AdminService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id = Number(this.route.snapshot.paramMap.get("Id"));
    this.adminService.getUserSelecionada(Id).subscribe((userSelect: User) => this.userSelect = userSelect);  
  }

  volver() {
    this.router.navigate(['/Panel/User']);
  }

  onSubmit() {
    this.adminService.EditUser(this.userSelect).subscribe(() => {
      this.snackBar.open('Usuario actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  getErrorMessage(field:string):string{
    let message ;
    if(field=="Edad"){
      message='Rango de edad debe ser 0-100';
    }
    if(field=="Nombre" || field=="Apellido" ){
      message='Caratcter Minimo 2 y Maximo 20';
    }
    if(field=="Cuenta" || field=="Direccion" ){
      message='Caratcter Minimo 2 y Maximo 50';
    }
    if(field=="Correo"  ){
      message='Debes introducir un correo eletronico';
    }
    if(this.LoginUser.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginUser.get(field)?.touched || this.LoginUser.get(field)?.dirty) && !this.LoginUser.get(field)?.valid );
  }

}