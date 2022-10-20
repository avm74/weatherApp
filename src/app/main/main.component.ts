import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Orbit } from '@uiball/loaders'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}

  localidad!: string;
  dias!: number;
  mostrarDetalle : boolean = false;
  resultadoRequest : any;

  mostrarLoader: boolean = false;


  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.params.subscribe((params) => {
      if(params['place'] != undefined){
        this.getTiempo(params['place'], 3);
      }

    });
  }

  enviarParametros(place: string){
    this.router.navigateByUrl('tiempo/' + place);
  }

  getTiempo(place: string, days: number){
    this.mostrarLoader = true;
    this.api.getTiempo(place, days).subscribe({
      next: (response) =>{
        this.mostrarLoader = false;
        this.mostrarDetalle = true;
        this.resultadoRequest = response;
      },
      error: (response) =>{
        this.mostrarLoader = false;
        alert("No se ha encontrado el lugar");
      },
      complete: () =>{
        
      }
    });
  }



}
