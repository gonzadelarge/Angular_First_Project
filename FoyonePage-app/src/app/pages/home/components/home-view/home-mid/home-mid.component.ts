import { Component, Input, OnInit } from '@angular/core';
import { Imid } from 'src/app/models/foyonePage';

@Component({
  selector: 'foyone-home-mid',
  templateUrl: './home-mid.component.html',
  styleUrls: ['./home-mid.component.scss']
})
export class HomeMidComponent implements OnInit {

  @Input() public hero?: Imid

  constructor() { }

  ngOnInit(): void {
  }

}
