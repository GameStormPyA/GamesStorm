import { Component, OnInit } from '@angular/core';
import { Subasta } from '../../../../AdminClass/subasta';
import { AdminService } from '../../../../servicios/admin.service';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-subasta',
  templateUrl: './editar-subasta.component.html',
  styleUrls: ['./editar-subasta.component.css']
})
export class EditarSubastaComponent implements OnInit {

  SubastaSelecionada = new Subasta(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,false,'','');

  LoginSubasta = this.formBuild.group({
    PrecioMin: ['',[Validators.required]],
    TiempoInicio: ['',[Validators.required]],
    HoraInicio: ['',[Validators.required]],
    TiempoFin: ['',[Validators.required]],
    HoraFin: ['',[Validators.required]],
  });

  constructor(private router: Router,
              private adminService:AdminService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id = Number(this.route.snapshot.paramMap.get("Id"));
    this.adminService.getSubastaSelecionada(Id).subscribe((SubastaSelecionada: Subasta) => this.SubastaSelecionada = SubastaSelecionada);

  }
  volver() {
    this.router.navigate(['/Panel/Subasta']);
  }

  onSubmit() {
    this.adminService.EditSubasta(this.SubastaSelecionada).subscribe(() => {
      this.snackBar.open('Subasta actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginSubasta.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginSubasta.get(field)?.touched || this.LoginSubasta.get(field)?.dirty) && !this.LoginSubasta.get(field)?.valid );
  }

}
