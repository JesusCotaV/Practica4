import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];
  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
   }

   // tslint:disable-next-line: typedef
   private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
   }
  // tslint:disable-next-line: typedef
  private cargarEquipo(){
    this.http.get('https://angularhtml-bfffc-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {
      this.equipo = resp;
      console.log(resp);
    });
  }
}

