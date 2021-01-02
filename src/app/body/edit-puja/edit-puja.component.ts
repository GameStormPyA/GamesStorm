import { Component, OnInit } from '@angular/core';
import { Puja } from '../../puja';
import { PujaService } from '../../servicios/puja.service';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Plataforma} from '../../plataforma';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-puja',
  templateUrl: './edit-puja.component.html',
  styleUrls: ['./edit-puja.component.css']
})
export class EditPujaComponent implements OnInit {

  public puja: Puja = new Puja(undefined,undefined,undefined,undefined,undefined,undefined,"","","");

  LoginPuja = this.formBuild.group({
    Puja: ['',[Validators.required]],
    Fecha: ['',[Validators.required]]
  });

  constructor(private router: Router,
              private pujaService:PujaService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id_Subasta = Number(this.route.snapshot.paramMap.get("Id_Subasta"));
    let Id_Cliente = Number(this.route.snapshot.paramMap.get("Id_Cliente"));
    let a=this.pujaService.getPuja(Id_Subasta,Id_Cliente).subscribe((puja: Puja) => this.puja = puja);
    
  }
  volver() {
    this.router.navigate(['/Pujas']);
  }

  onSubmit() {
    this.pujaService.EditPuja(this.puja).subscribe(() => {
      this.snackBar.open('Puja actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
      console.log(this.puja);
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
