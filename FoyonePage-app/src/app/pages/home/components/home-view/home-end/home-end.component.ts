import { Component, Input, OnInit } from '@angular/core';
import { Iend } from '../../../models/ihome';

@Component({
  selector: 'foyone-home-end',
  templateUrl: './home-end.component.html',
  styleUrls: ['./home-end.component.scss']
})
export class HomeEndComponent implements OnInit {

  @Input() public hero?: Iend
  constructor() { }

  ngOnInit(): void {
  }

}
