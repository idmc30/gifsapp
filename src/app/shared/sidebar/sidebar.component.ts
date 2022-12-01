import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {


  get historial(){
    return this.gifservice.historial;
  }

  constructor(private gifservice :GifsService) { }


  buscar( busqueda : string){



    this.gifservice.buscarGifs( busqueda);

  }


}
