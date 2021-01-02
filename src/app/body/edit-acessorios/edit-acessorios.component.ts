import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccesoriosService } from "../../servicios/accesorios.service"
import { Accesorios } from '../../accesorios';
import { Categoria } from '../../categoria';
import { Plataforma} from '../../plataforma';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-acessorios',
  templateUrl: './edit-acessorios.component.html',
  styleUrls: ['./edit-acessorios.component.css']
})
export class EditAcessoriosComponent implements OnInit {
  
  
  public accesorio: Accesorios = new Accesorios(undefined,undefined,'','',undefined,'',undefined,undefined,'');
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



  constructor(private router: Router,
             private accesoriosService: AccesoriosService,
             private route: ActivatedRoute,
             private snackBar: MatSnackBar,
             private formBuild :FormBuilder) { }

  ngOnInit() {
    let idAccesorio = Number(this.route.snapshot.paramMap.get("Id_Accesorios"));
    let idPlataforma = Number(this.route.snapshot.paramMap.get("Id_Plataforma"));
    this.accesoriosService.getAccesorio(idAccesorio,idPlataforma).subscribe((accesorio: Accesorios) => this.accesorio = accesorio);

    this.obtenerCategorias();
    this.obtenerPlataforma();
  }

  obtenerCategorias(){
    this.accesoriosService.getCategoria().subscribe((listaCategoria: Categoria[]) => this.listaCategoria = listaCategoria); 
  }

  obtenerPlataforma(){
    this.accesoriosService.getPlataforma().subscribe((listaPlatafroma: Plataforma[]) => this.listaPlatafroma = listaPlatafroma);
  }

  volver() {
    this.router.navigate(['/Accesorios']);
  }

  onSubmit() {
    this.accesoriosService.EditAccesorios(this.accesorio).subscribe(() => {
      this.snackBar.open('Accesorio actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
      console.log(this.accesorio);
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
