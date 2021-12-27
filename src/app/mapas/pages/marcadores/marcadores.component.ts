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

    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 999;
    }

    li{
      cursor: pointer;
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

    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'Hola Mundo';

    // new mapboxgl.Marker({
    //   element: markerHtml
    // })
    // .setLngLat(this.center)
    // .addTo(this.mapa);

  }

  irMarcador(){

  }

  agregarMarcador(){

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color: color
    })
    .setLngLat(this.center)
    .addTo(this.mapa);

  }

}
