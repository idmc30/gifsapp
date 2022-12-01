import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

    @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifgServices: GifsService){

  }

  buscar( ){


     const valor =  this.txtBuscar.nativeElement.value;

     if ( valor.trim().length === 0) {

      return ;
     }

     this.gifgServices.buscarGifs( valor );

     this.txtBuscar.nativeElement.value= '';





  }


}
