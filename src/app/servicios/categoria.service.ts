import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Categoria } from "../categoria"
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCategoria(){
    return this.http.get(`${this.baseUrl}/getCategoria.php`);
  }
  DeleteCategoria(categoria: Categoria){
    return this.http.delete(`${this.baseUrl}/DeleteCategoria.php?Id=${categoria.Id}`);
  }
  addCategoria(categoria: Categoria){
    return this.http.post(`${this.baseUrl}/AgregarCategoria.php`, categoria);
  }
  EditCategoria(categoria: Categoria) {
    return this.http.post(`${this.baseUrl}/EditCategoria.php`, categoria);
  }
}
