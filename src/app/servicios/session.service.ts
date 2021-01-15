import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Usuario } from "../usuario"
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  Registrar(usuario: Usuario){
    return this.http.post(`${this.baseUrl}/AgregarUsuario.php`, usuario);
  } 
  Existe(usuario: Usuario){
    return this.http.post(`${this.baseUrl}/UsuarioExist.php`, usuario);
  } 
  Login(usuario: Usuario){
    return this.http.post(`${this.baseUrl}/Login.php`, usuario);
  }
  getUser(usuario: Usuario){
    return this.http.get(`${this.baseUrl}/getUserSelecionadoHome.php?Correo=${usuario.Correo}`);
  }
}
