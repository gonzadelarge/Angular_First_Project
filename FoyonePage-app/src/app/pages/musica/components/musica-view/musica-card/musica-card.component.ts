import { Component, Input, OnInit } from '@angular/core';
import { Imid } from 'src/app/models/foyonePage';

@Component({
  selector: 'foyone-musica-card',
  templateUrl: './musica-card.component.html',
  styleUrls: ['./musica-card.component.scss']
})
export class MusicaCardComponent implements OnInit {

  @Input() public musica?: Imid

  constructor() { }

  ngOnInit(): void {
  }

}
