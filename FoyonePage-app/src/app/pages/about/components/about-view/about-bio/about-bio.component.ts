import { Component, Input, OnInit } from '@angular/core';
import { Ibio } from '../../../models/iabout';

@Component({
  selector: 'foyone-about-bio',
  templateUrl: './about-bio.component.html',
  styleUrls: ['./about-bio.component.scss']
})
export class AboutBioComponent implements OnInit {

  @Input() public about?: Ibio
  constructor() { }

  ngOnInit(): void {
  }

}
