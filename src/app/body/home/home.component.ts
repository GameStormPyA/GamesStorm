import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Subasta} from "../../subasta";
import { HomeService} from "../../servicios/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listaSubastas: Subasta[]=[];

  constructor(private homeService:HomeService) { }

  slides = [{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];
  
  ngOnInit(): void {
    this.obtenerSubasta();
  }
  obtenerSubasta(){
    return this.homeService.getSubastaActivasUno().subscribe((listaSubastas: Subasta[]) => this.listaSubastas = listaSubastas);
  }

}
