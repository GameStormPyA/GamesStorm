import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Subasta } from "../subasta"
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SubastaService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSubasta(){
    return this.http.get(`${this.baseUrl}/getSubasta.php`);
  }
  getSubastaSelecionada(Id: string | number ){
    return this.http.get(`${this.baseUrl}/getSubastaSelecionada.php?Id=${Id}`);
  }
  DeleteSubasta(subasta: Subasta){
    return this.http.delete(`${this.baseUrl}/DeleteSubasta.php?Id=${subasta.Id}`);
  }
  getPlataforma(){
    return this.http.get(`${this.baseUrl}/getPlataforma.php`);
  }
  getJuego(){
    return this.http.get(`${this.baseUrl}/getJuego.php`);
  }
  addSubasta(subasta: Subasta) {
    return this.http.post(`${this.baseUrl}/AgregarSubasta.php`, subasta);
  }

  EditSubasta(subasta: Subasta) {
    return this.http.post(`${this.baseUrl}/EditSubasta.php`, subasta);
  }
}
