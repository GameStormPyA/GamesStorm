import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Puja } from "../puja"
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSubastaActivasUno(){
    return this.http.get(`${this.baseUrl}/getSubastaHome.php`);
  }

  addPuja(puja: Puja){
    return this.http.post(`${this.baseUrl}/AgregarPujaHome.php`, puja);
  }

}
