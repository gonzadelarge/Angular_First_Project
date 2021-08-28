import { Component, Input, OnInit } from '@angular/core';
import { Iinfo } from 'src/app/models/foyonePage';

@Component({
  selector: 'foyone-tienda-info',
  templateUrl: './tienda-info.component.html',
  styleUrls: ['./tienda-info.component.scss']
})
export class TiendaInfoComponent implements OnInit {

  @Input() public tienda?: Iinfo
  constructor() { }

  ngOnInit(): void {
  }

}
