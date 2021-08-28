import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Itienda } from '../../models/itienda';

@Component({
  selector: 'foyone-tienda-view',
  templateUrl: './tienda-view.component.html',
  styleUrls: ['./tienda-view.component.scss']
})
export class TiendaViewComponent implements OnInit {

  public tiendaView?: Itienda

  public coleccion?: any
  public longitud = 0;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getStore();
    this.getLength();
  }

  public getStore() {
    this.requestService.getRequest('tienda').subscribe( (dataHome: any) => {
      this.tiendaView = dataHome;
    })
  }

  public getLength() {
    this.requestService.getRequest('tienda').subscribe( (dataHome: any) => {
      this.coleccion = dataHome.coleccion;
      this.longitud = this.coleccion.length;
    })
  }

}
