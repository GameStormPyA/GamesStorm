import { Component, OnInit } from '@angular/core';
import { Subasta } from '../../subasta';
import { Juego } from '../../juego';
import { SubastaService } from '../../servicios/subasta.service';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Plataforma} from '../../plataforma';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-subasta',
  templateUrl: './edit-subasta.component.html',
  styleUrls: ['./edit-subasta.component.css']
})
export class EditSubastaComponent implements OnInit {

  public subasta: Subasta = new Subasta(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,"","","");
  public listaJuego: Juego[]=[];
  public listaPlatafroma: Plataforma[]=[];

  LoginSubasta = this.formBuild.group({
    PrecioMin: ['',[Validators.required]],
    TiempoInicio: ['',[Validators.required]],
    HoraInicio: ['',[Validators.required]],
    TiempoFin: ['',[Validators.required]],
    HoraFin: ['',[Validators.required]],
  });

  constructor(private router: Router,
              private subastaService:SubastaService,
              private route: ActivatedRoute,
              private snackBar:MatSnackBar,
              private formBuild :FormBuilder) { }

  ngOnInit(): void {
    let Id = Number(this.route.snapshot.paramMap.get("Id"));
    this.subastaService.getSubastaSelecionada(Id).subscribe((subasta: Subasta) => this.subasta = subasta);

    this.obtenerPlataforma();
    this.obtenerJuego();
  }

  obtenerJuego(){
    return this.subastaService.getJuego().subscribe((listaJuego: Juego[]) => this.listaJuego = listaJuego);
  }
  
  obtenerPlataforma(){
    return this.subastaService.getPlataforma().subscribe((listaPlatafroma: Plataforma[]) => this.listaPlatafroma = listaPlatafroma);
  }

  volver() {
    this.router.navigate(['/Subastas']);
  }

  onSubmit() {
    this.subastaService.EditSubasta(this.subasta).subscribe(() => {
      this.snackBar.open('Subasta actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
      console.log(this.subasta);
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
