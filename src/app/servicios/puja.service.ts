import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Puja } from "../puja"
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PujaService {
  baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getPujas(){
    return this.http.get(`${this.baseUrl}/getPujas.php`);
  } 
  getPuja(Id_Subasta: string | number , Id_Cliente: string | number) {
    return this.http.get(`${this.baseUrl}/getPuja.php?Id_Subasta=${Id_Subasta}&Id_Cliente=${Id_Cliente}`);
  } 
  DeletePuja(puja: Puja) {
    return this.http.delete(`${this.baseUrl}/DeletePuja.php?Id_Subasta=${puja.Id_Subasta}&Id_Cliente=${puja.Id_Cliente}`);
  }
  EditPuja(puja: Puja) {
    return this.http.post(`${this.baseUrl}/EditPujas.php`, puja);
  }

  /*
  getAccesorios(){
    return this.http.get(`${this.baseUrl}/getAll.php`);
  } 
  getCategoria(){
    return this.http.get(`${this.baseUrl}/getCategoria.php`);
  }
  getPlataforma(){
    return this.http.get(`${this.baseUrl}/getPlataforma.php`);
  }
  addAccesorios(accesorios: Accesorios) {
    return this.http.post(`${this.baseUrl}/AgregarAccesorio.php`, accesorios);
  }
  DeleteAccesorios(accesorios: Accesorios) {
    return this.http.delete(`${this.baseUrl}/DeleteAccesorio.php?idAccesorio=${accesorios.Id_Accesorios}&idPlataforma=${accesorios.Id_Plataforma}`);
  }
  getAccesorio(Id_Accesorios: string | number , Id_Plataforma: string | number) {
    return this.http.get(`${this.baseUrl}/getAccesorio.php?idAccesorio=${Id_Accesorios}&idPlataforma=${Id_Plataforma}`);
  }
  EditAccesorios(accesorios: Accesorios) {
    return this.http.post(`${this.baseUrl}/EditAccesorios.php`, accesorios);
  }
  */
}
