import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [

  `
    #mapa {
      width: 100%;
      height: 100%
    }  
  `

  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // (mapboxgl as any).accessToken = environment.mapboxToken;
    
    var map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ -73.1237818, 7.099439227372295],
    zoom: 16
});

  }

}
