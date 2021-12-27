import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container {
      width: 100%;
      height: 100%
    } 
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {


  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  ZoomLevel: number = 15;
  center: [number, number] = [ -73.1237818, 7.099439227372295];
  

  constructor() { }

  ngAfterViewInit(): void {
      
    this.mapa = new mapboxgl.Map({
    container: this.divMapa.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.center,
    zoom: this.ZoomLevel
    });

    const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Hola Mundo';

    new mapboxgl.Marker({
      element: markerHtml
    })
    .setLngLat(this.center)
    .addTo(this.mapa);

  }

}
