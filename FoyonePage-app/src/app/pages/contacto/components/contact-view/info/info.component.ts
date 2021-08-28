import { Component, Input, OnInit } from '@angular/core';
import { Iinfo } from 'src/app/models/foyonePage';

@Component({
  selector: 'foyone-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() public contact?: Iinfo;

  constructor() { }

  ngOnInit(): void {
  }

}
