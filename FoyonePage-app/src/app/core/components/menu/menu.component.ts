import { Component, Input, OnInit } from '@angular/core';
import { Imenu } from 'src/app/models/foyonePage';

@Component({
  selector: 'foyone-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() public menu?: Imenu;

  constructor() { }

  ngOnInit(): void {
  }

  public flag: boolean = true

  changeClass() {
    this.flag = !this.flag
  }

}
