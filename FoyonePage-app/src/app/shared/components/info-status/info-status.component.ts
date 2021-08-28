import { Component, Input, OnInit } from '@angular/core';
import { IinfoStatus } from './models/istatus';

@Component({
  selector: 'foyone-info-status',
  templateUrl: './info-status.component.html',
  styleUrls: ['./info-status.component.scss']
})
export class InfoStatusComponent implements OnInit {

  @Input() public infoStatus?: IinfoStatus

  constructor() { }

  ngOnInit(): void {
  }

}
