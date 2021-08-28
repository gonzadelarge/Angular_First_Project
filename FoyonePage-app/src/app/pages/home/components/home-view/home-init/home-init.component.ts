import { Component, Input, OnInit } from '@angular/core';
import { Init } from '../../../models/ihome';

@Component({
  selector: 'foyone-home-init',
  templateUrl: './home-init.component.html',
  styleUrls: ['./home-init.component.scss']
})
export class HomeInitComponent implements OnInit {

  @Input() public hero?: Init
  constructor() { }

  ngOnInit(): void {
    console.log('Init', this.hero)
  }

}
