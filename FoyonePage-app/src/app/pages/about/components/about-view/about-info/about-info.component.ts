import { Component, Input, OnInit } from '@angular/core';
import { Iinfo } from 'src/app/models/foyonePage';

@Component({
  selector: 'foyone-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss']
})
export class AboutInfoComponent implements OnInit {

  @Input() public about?: Iinfo
  
  constructor() { }

  ngOnInit(): void {
  }

}
