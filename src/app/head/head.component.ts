import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private router: Router) { }
  

  public Id:any ;
  public admin:any;

  ngOnInit(): void {
    
    this.Id = localStorage.getItem('Id');
    this.admin = localStorage.getItem('admi');
    //window.location.reload();
  }
  Cerrar(){
    localStorage.removeItem('Id');
    localStorage.removeItem('admi');
    window.location.reload();
  }
}
