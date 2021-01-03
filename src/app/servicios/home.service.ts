import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Subasta } from "../subasta"
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
}
