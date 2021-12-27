import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
      width: 400px;
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
export class ZoomRangeComponent implements AfterViewInit {


  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  ZoomLevel: number = 10;

  constructor() { }

  ngAfterViewInit(): void {
    // (mapboxgl as any).accessToken = environment.mapboxToken;
    
    this.mapa = new mapboxgl.Map({
    container: this.divMapa.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ -73.1237818, 7.099439227372295],
    zoom: this.ZoomLevel
    });

    this.mapa.on('zoom', (ev) => {
      this.ZoomLevel = this.mapa.getZoom();
      
    })

    this.mapa.on('zoomend', (ev) => {
      if(this.mapa.getZoom() > 18 ){
        this.mapa.zoomTo( 18 );
      }
    })

  }

  ZoomIn(){
    this.mapa.zoomIn();
    // this.ZoomLevel = this.mapa.getZoom();
  }

  ZoomOut(){
    this.mapa.zoomOut();
    // this.ZoomLevel = this.mapa.getZoom();

  }

  zoomCambio( valor: string){
    this.mapa.zoomTo(Number(valor))
  }

}
