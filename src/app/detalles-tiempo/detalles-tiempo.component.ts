import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-tiempo',
  templateUrl: './detalles-tiempo.component.html',
  styleUrls: ['./detalles-tiempo.component.scss']
})
export class DetallesTiempoComponent implements OnInit {

  constructor(private mainComponent: MainComponent, private router: Router) { }

  respuesta : any = this.mainComponent.resultadoRequest;
  localidad : string = this.respuesta.location.name;
  dias : any = this.respuesta.forecast.forecastday;

  ngOnInit(): void {
    console.log(this.respuesta);
  }

}
