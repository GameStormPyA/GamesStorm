import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../servicios/admin.service';
import { Juego } from '../../../../AdminClass/juego';
import { Genero } from '../../../../AdminClass/genero';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-juego',
  templateUrl: './editar-juego.component.html',
  styleUrls: ['./editar-juego.component.css']
})
export class EditarJuegoComponent implements OnInit {

  public JuegoSelect: Juego = new Juego(undefined,"","","",undefined,undefined,undefined,"","",undefined,undefined,'');

  public listaGenero: Genero[]=[];

  LoginJuego = this.formBuild.group({
    Nombre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    Descripcion: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(1000)]],
    Lanzamiento: ['',[Validators.required]],
    Video: ['',[Validators.required]],
    EdadMin: ['',[Validators.required,Validators.min(0),Validators.max(21)]],
    //Portada: ['',[Validators.required]],
    //Imagenes: ['',[Validators.required]],
    Id_Genero: ['',[Validators.required]]
   });

  constructor(private router: Router,
              private adminService:AdminService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id = Number(this.route.snapshot.paramMap.get("Id"));
    this.adminService.getJuegoSelecionada(Id).subscribe((JuegoSelect: Juego) => this.JuegoSelect = JuegoSelect);  

    this.obtenerGenero();
  }

  volver() {
    this.router.navigate(['/Panel/Juego']);
  }
 
  obtenerGenero(){
   return this.adminService.getGenero().subscribe((listaGenero: Genero[]) => this.listaGenero = listaGenero);
 }

  onSubmit() {
    this.adminService.EditJuego(this.JuegoSelect).subscribe(() => {
      this.snackBar.open('Juego actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginJuego.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginJuego.get(field)?.touched || this.LoginJuego.get(field)?.dirty) && !this.LoginJuego.get(field)?.valid );
  }

}
