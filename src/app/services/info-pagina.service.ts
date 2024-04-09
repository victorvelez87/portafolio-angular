import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [{"frase":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.","nombre ":"Víctor Gutiérrez","subtitulo":"Instructor","twitter":"@fernando_her85","url":"https://firebasestorage.googleapis.com/v0/b/angular-html-f6cfd.appspot.com/o/team-1.jpg?alt=media&token=4af06730-259a-467a-9c00-0a2f42769c2b"},{"frase":"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.","nombre":"Melissa Flores","subtitulo":"Ingeniera en Sistemas","twitter":"@melissa_as","url":"https://firebasestorage.googleapis.com/v0/b/angular-html-f6cfd.appspot.com/o/team-2.jpg?alt=media&token=90117ae6-c86c-4075-b796-c32cbc3216a3"},{"frase":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nombre":"Patrick Anderson","subtitulo":"Art Director","twitter":"@patrick_ander","url":"https://firebasestorage.googleapis.com/v0/b/angular-html-f6cfd.appspot.com/o/team-3.jpg?alt=media&token=c15bd2fa-66e0-4132-a0c8-24f6e1ab83a9"}];

  constructor( private http: HttpClient) { 
    //console.log('Servicio de infoPagina listo');
    this.cargarInfo();
    this.cargarEquipo();
    
  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp : InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      //console.log(resp);
      // console.log( resp['email'] );
    });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-f6cfd-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe( (resp: any) => {

      this.equipo = resp;
      console.log(resp);
      // console.log( resp['email'] );
    });
  }

  
}
