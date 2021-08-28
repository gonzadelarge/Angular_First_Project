import { Component, Input, OnInit } from '@angular/core';
import { Iinfo } from 'src/app/models/foyonePage';

@Component({
  selector: 'foyone-musica-info',
  templateUrl: './musica-info.component.html',
  styleUrls: ['./musica-info.component.scss']
})
export class MusicaInfoComponent implements OnInit {

  @Input() public musica?: Iinfo

  constructor() { }

  ngOnInit(): void {
    console.log('Desde Interfaz de Info', this.musica)
  }

}
