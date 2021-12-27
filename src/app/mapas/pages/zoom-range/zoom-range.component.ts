import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [

    `
    .mapa-container {
      width: 100%;
      height: 100%
    }  

    .row{
      background-color: white;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      z-index: 999;
    }
  `

  ]
})
export class ZoomRangeComponent implements OnInit {

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
