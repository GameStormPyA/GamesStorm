import { Injectable } from '@angular/core';
import { JuegosList } from '../Class/juegos-list';
import { AccesoriosList } from '../Class/accesorios-list';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getListaJuegos():Observable<JuegosList[]>{
    return this.http.get<JuegosList[]>(`${this.baseUrl}/getListJuegos.php`);
  }

  getListaAccesorios():Observable<AccesoriosList[]>{
    return this.http.get<AccesoriosList[]>(`${this.baseUrl}/getListAccesorios.php`);
  }
  getAccesorioSelect(Id_Accesorio: string | number , Id_Plataforma: string | number):Observable<AccesoriosList[]>{
    return this.http.get<AccesoriosList[]>(`${this.baseUrl}/getAccesoriosSelect.php?Id_Accesorio=${Id_Accesorio}&Id_Plataforma=${Id_Plataforma}`);
  }
  getJuegosSelect(Id_Juego: string | number , Id_Plataforma: string | number):Observable<JuegosList[]>{
    return this.http.get<JuegosList[]>(`${this.baseUrl}/getJuegoSelect.php?Id_Juego=${Id_Juego}&Id_Plataforma=${Id_Plataforma}`);
  }
}
