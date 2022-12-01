import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'tu_apikey';
  private servicio_url : string = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];

  public resultados : Gif[] = [];




  get historial(){
    return [...this._historial];
  }

  constructor(private http : HttpClient){


      this._historial = JSON.parse( localStorage.getItem('historial')!) || []
      this.resultados = JSON.parse( localStorage.getItem('resultados')!) || []
     // primera forma de validar
    // if ( localStorage.getItem('historial') ) {

    //   this._historial = JSON.parse( localStorage.getItem('historial')!);
    // }

  }



  buscarGifs( query : string = ''){

     query = query.trim().toLocaleLowerCase();

   if (!this._historial.includes( query )) {

     this._historial.unshift( query );
     this._historial = this._historial.splice(0, 10);


     localStorage.setItem('historial', JSON.stringify( this._historial ));

   }

    // parametros de  http
    const params =  new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '')
          .set('q', query)

   this.http.get<SearchGifsResponse>(`${this.servicio_url}/search`, {params })
    .subscribe( ( resp ) =>{

      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify( this.resultados ));

    })

  }

}
