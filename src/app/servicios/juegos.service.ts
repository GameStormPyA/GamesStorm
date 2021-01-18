import { Injectable } from '@angular/core';
import { JuegosList } from '../Class/juegos-list';
//import { juegos} from '../Class/Interfaces/Juegos';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
//import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getListaJuegos():Observable<JuegosList[]>{
    return this.http.get<JuegosList[]>(`${this.baseUrl}/getListJuegos.php`);
  }
}
