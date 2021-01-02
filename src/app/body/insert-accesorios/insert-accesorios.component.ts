import { Component, OnInit } from '@angular/core';
import { Accesorios } from '../../accesorios';
import { AccesoriosService } from '../../servicios/accesorios.service';
import { Router } from '@angular/router';
import { Categoria } from '../../categoria';
import { Plataforma} from '../../plataforma';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-accesorios',
  templateUrl: './insert-accesorios.component.html',
  styleUrls: ['./insert-accesorios.component.css']
})
export class InsertAccesoriosComponent implements OnInit {

  public SelectDefould = "";
  public listaCategoria: Categoria[]=[];
  public listaPlatafroma: Plataforma[]=[];

  LoginAccesorio = this.formBuild.group({
    Nombre: ['',[Validators.required]],
    Descripcion: ['',[Validators.required]],
    Portada: ['',[Validators.required]],
    Categoria: ['',[Validators.required]],
    Id_Plataforma: ['',[Validators.required]],
    Precio: ['',[Validators.required]],
    Edicion: ['',[Validators.required]],
    Stock: ['',[Validators.required]]
  });

  constructor(private accesoriosService:AccesoriosService,
              private snackBar: MatSnackBar,
              private router: Router,
              private formBuild :FormBuilder) {}

    ngOnInit() {
      this.obtenerCategorias();
      this.obtenerPlataforma();
    }

  AccesoriosModel = new Accesorios(undefined,undefined,'','',undefined,'',undefined,undefined,'');

  obtenerCategorias(){
    return this.accesoriosService.getCategoria().subscribe((listaCategoria: Categoria[]) => this.listaCategoria = listaCategoria);
  }

  obtenerPlataforma(){
    return this.accesoriosService.getPlataforma().subscribe((listaPlatafroma: Plataforma[]) => this.listaPlatafroma = listaPlatafroma);
  }

  
  onSubmit() {
    this.accesoriosService.addAccesorios(this.AccesoriosModel).subscribe(() => {
      this.snackBar.open('Accesorio guardada', undefined, {
        duration: 1500,
      });
      this.volver();
    })
  }
  volver() {
    this.router.navigate(['/Accesorios']);
  }

  getErrorMessage(field:string):string{
    let message ;
    if(this.LoginAccesorio.get(field)?.errors.required){
      message='debes rellenar el campo';
    }
    return message;
  }
  isValidField(field:string):boolean{
    return ( (this.LoginAccesorio.get(field)?.touched || this.LoginAccesorio.get(field)?.dirty) && !this.LoginAccesorio.get(field)?.valid );
  }
}
