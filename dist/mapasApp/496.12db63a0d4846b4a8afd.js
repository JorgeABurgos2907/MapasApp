"use strict";(self.webpackChunkmapas_app=self.webpackChunkmapas_app||[]).push([[496],{496:(A,m,s)=>{s.r(m),s.d(m,{MapasModule:()=>T});var p=s(583),d=s(353),c=s(958),e=s(639);let u=(()=>{class t{constructor(){}ngOnInit(){new c.Map({container:"mapa",style:"mapbox://styles/mapbox/streets-v11",center:[-73.1237818,7.099439227372295],zoom:16})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-full-screen"]],decls:1,vars:0,consts:[["id","mapa"]],template:function(o,a){1&o&&e._UZ(0,"div",0)},styles:["#mapa[_ngcontent-%COMP%]{width:100%;height:100%}"]}),t})();const g=["mapa"];let f=(()=>{class t{constructor(){this.ZoomLevel=10,this.center=[-73.1237818,7.099439227372295]}ngOnDestroy(){this.mapa.off("zoom",()=>{}),this.mapa.off("zoomed",()=>{}),this.mapa.off("move",()=>{})}ngAfterViewInit(){this.mapa=new c.Map({container:this.divMapa.nativeElement,style:"mapbox://styles/mapbox/streets-v11",center:this.center,zoom:this.ZoomLevel}),this.mapa.on("zoom",o=>{this.ZoomLevel=this.mapa.getZoom()}),this.mapa.on("zoomend",o=>{this.mapa.getZoom()>18&&this.mapa.zoomTo(18)}),this.mapa.on("move",o=>{const{lng:a,lat:r}=o.target.getCenter();this.center=[a,r]})}ZoomIn(){this.mapa.zoomIn()}ZoomOut(){this.mapa.zoomOut()}zoomCambio(o){this.mapa.zoomTo(Number(o))}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-zoom-range"]],viewQuery:function(o,a){if(1&o&&e.Gf(g,5),2&o){let r;e.iGM(r=e.CRH())&&(a.divMapa=r.first)}},decls:16,vars:13,consts:[[1,"mapa-container"],["mapa",""],[1,"row"],[1,"col-12"],[1,"form-label"],["type","range","min","0","max","18",1,"form-range",3,"value","input"],["zoomInput",""],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-primary","float-end",3,"click"]],template:function(o,a){if(1&o){const r=e.EpF();e._UZ(0,"div",0,1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"label",4),e._uU(5),e.ALo(6,"number"),e.ALo(7,"number"),e.ALo(8,"number"),e.qZA(),e.TgZ(9,"input",5,6),e.NdJ("input",function(){e.CHM(r);const l=e.MAs(10);return a.zoomCambio(l.value)}),e.qZA(),e.qZA(),e.TgZ(11,"div",3),e.TgZ(12,"button",7),e.NdJ("click",function(){return a.ZoomOut()}),e._uU(13," - "),e.qZA(),e.TgZ(14,"button",8),e.NdJ("click",function(){return a.ZoomIn()}),e._uU(15," + "),e.qZA(),e.qZA(),e.qZA()}2&o&&(e.xp6(5),e.lnq(" Zoom: ",e.xi3(6,4,a.ZoomLevel,"2.0-2")," - Lng, Lat : [",e.xi3(7,7,a.center[0],"2.4-4")," , ",e.xi3(8,10,a.center[1],"2.4-4")," ] "),e.xp6(4),e.Q6J("value",a.ZoomLevel))},pipes:[p.JJ],styles:[".mapa-container[_ngcontent-%COMP%]{width:100%;height:100%}.row[_ngcontent-%COMP%]{background-color:#fff;width:400px;bottom:50px;left:50px;padding:10px;border-radius:5px;position:fixed;z-index:999}"]}),t})();const h=["mapa"],_=function(t){return{"background-color":t}};function M(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const i=e.CHM(o).$implicit;return e.oxw().irMarcador(i)})("dblclick",function(){const i=e.CHM(o).index;return e.oxw().borrarMarcador(i)}),e._uU(1),e.qZA()}if(2&t){const a=n.index;e.Q6J("ngStyle",e.VKq(2,_,n.$implicit.color)),e.xp6(1),e.hij(" marker ",a+1," ")}}let Z=(()=>{class t{constructor(){this.ZoomLevel=15,this.center=[-73.1237818,7.099439227372295],this.marcadores=[]}ngAfterViewInit(){this.mapa=new c.Map({container:this.divMapa.nativeElement,style:"mapbox://styles/mapbox/streets-v11",center:this.center,zoom:this.ZoomLevel}),this.leerLocalStorage()}agregarMarcador(){const o="#xxxxxx".replace(/x/g,r=>(16*Math.random()|0).toString(16)),a=new c.Marker({draggable:!0,color:o}).setLngLat(this.center).addTo(this.mapa);this.marcadores.push({color:o,marker:a}),this.guardarMarcadoresLocalSotrage()}irMarcador(o){this.mapa.flyTo({center:o.marker.getLngLat()})}guardarMarcadoresLocalSotrage(){const o=[];this.marcadores.forEach(a=>{const r=a.color,{lng:i,lat:l}=a.marker.getLngLat();o.push({color:r,centro:[i,l]})}),localStorage.setItem("marcadores",JSON.stringify(o))}leerLocalStorage(){localStorage.getItem("marcadores")&&JSON.parse(localStorage.getItem("marcadores")).forEach(a=>{const r=new c.Marker({color:a.color,draggable:!0}).setLngLat(a.centro).addTo(this.mapa);this.marcadores.push({marker:r,color:a.color}),r.on("dragend",()=>{this.guardarMarcadoresLocalSotrage()})})}borrarMarcador(o){var a;null===(a=this.marcadores[o].marker)||void 0===a||a.remove(),this.marcadores.splice(o,1),this.guardarMarcadoresLocalSotrage()}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-marcadores"]],viewQuery:function(o,a){if(1&o&&e.Gf(h,5),2&o){let r;e.iGM(r=e.CRH())&&(a.divMapa=r.first)}},decls:6,vars:1,consts:[[1,"list-group"],[1,"list-group-item","list-group-item-info",3,"click"],["class","list-group-item",3,"ngStyle","click","dblclick",4,"ngFor","ngForOf"],[1,"mapa-container"],["mapa",""],[1,"list-group-item",3,"ngStyle","click","dblclick"]],template:function(o,a){1&o&&(e.TgZ(0,"ul",0),e.TgZ(1,"li",1),e.NdJ("click",function(){return a.agregarMarcador()}),e._uU(2," + Agregar "),e.qZA(),e.YNc(3,M,2,4,"li",2),e.qZA(),e._UZ(4,"div",3,4)),2&o&&(e.xp6(3),e.Q6J("ngForOf",a.marcadores))},directives:[p.sg,p.PC],styles:[".mapa-container[_ngcontent-%COMP%]{width:100%;height:100%}.list-group[_ngcontent-%COMP%]{position:fixed;top:20px;right:20px;z-index:999}li[_ngcontent-%COMP%]{cursor:pointer}"]}),t})();const v=["mapa"];let C=(()=>{class t{constructor(){this.lngLat=[0,0]}ngAfterViewInit(){var o=new c.Map({container:this.divMapa.nativeElement,style:"mapbox://styles/mapbox/streets-v11",center:this.lngLat,zoom:16});(new c.Marker).setLngLat(this.lngLat).addTo(o)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-mini-mapa"]],viewQuery:function(o,a){if(1&o&&e.Gf(v,5),2&o){let r;e.iGM(r=e.CRH())&&(a.divMapa=r.first)}},inputs:{lngLat:"lngLat"},decls:2,vars:0,consts:[["mapa",""]],template:function(o,a){1&o&&e._UZ(0,"div",null,0)},styles:["div[_ngcontent-%COMP%]{width:100%;height:100%;margin:0}"]}),t})();function x(t,n){if(1&t&&(e.TgZ(0,"div",6),e.TgZ(1,"div",7),e._UZ(2,"app-mini-mapa",8),e.TgZ(3,"div",9),e.TgZ(4,"h5",10),e._uU(5),e.qZA(),e.TgZ(6,"p",11),e._uU(7),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const o=n.$implicit;e.xp6(2),e.Q6J("lngLat",o.lngLat),e.xp6(3),e.hij(" ",o.titulo," "),e.xp6(2),e.hij(" ",o.descripcion," ")}}const L=[{path:"",children:[{path:"fullscreen",component:u},{path:"zoom-range",component:f},{path:"marcadores",component:Z},{path:"propiedades",component:(()=>{class t{constructor(){this.propiedades=[{titulo:"Casa residencial, Canad\xe1",descripcion:"Bella propiedad en Katana, Canad\xe1",lngLat:[-75.92722289474008,45.280015511264466]},{titulo:"Casa de playa, M\xe9xico",descripcion:"Hermosa casa de playa en Acapulco, M\xe9xico",lngLat:[-99.91287720907991,16.828940930185748]},{titulo:"Apartamento, Argentina",descripcion:"Lujoso apartamento en el coraz\xf3n de Buenos Aires, Argentina",lngLat:[-58.430166677283445,-34.57150108832866]},{titulo:"Local comercial, Espa\xf1a",descripcion:"Local comercial disponible en Madrid, Espa\xf1a, cerca de El Jard\xedn Secreto.",lngLat:[-3.7112735618380177,40.42567285425766]}]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-propiedades"]],decls:11,vars:1,consts:[[1,"row","mt-3"],[1,"col-2"],[1,"col"],[1,"row","container"],[1,"row"],["class","col-4 mb-2",4,"ngFor","ngForOf"],[1,"col-4","mb-2"],[1,"card"],[1,"card-img-top",3,"lngLat"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h1"),e._uU(4,"Lista de propiedades"),e.qZA(),e._UZ(5,"hr"),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e._UZ(7,"div",1),e.TgZ(8,"div",2),e.TgZ(9,"div",4),e.YNc(10,x,8,3,"div",5),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(10),e.Q6J("ngForOf",a.propiedades))},directives:[p.sg,C],encapsulation:2}),t})()},{path:"**",redirectTo:"fullscreen"}]}];let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.Bz.forChild(L)],d.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.ez,y]]}),t})()}}]);