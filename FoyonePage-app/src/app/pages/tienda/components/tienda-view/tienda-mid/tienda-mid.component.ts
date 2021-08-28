import { Component, Input, OnInit } from '@angular/core';
import { Icoleccion } from '../../../models/itienda';

@Component({
  selector: 'foyone-tienda-mid',
  templateUrl: './tienda-mid.component.html',
  styleUrls: ['./tienda-mid.component.scss']
})
export class TiendaMidComponent implements OnInit {

  @Input() public tienda?: Icoleccion[] = [];
  @Input() public longitud?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
