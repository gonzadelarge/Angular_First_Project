import { Component } from '@angular/core';
import { Ifooter, Imenu } from './models/foyonePage';
import { RequestService } from './service/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public menu?: Imenu;
  public footer?: Ifooter;

  
  constructor(private requestService: RequestService) {
    this.getCoreMenu();
    this.getCoreFooter();
  }

  public getCoreMenu() {
    this.requestService.getRequest('menu').subscribe((data: any) => {
      this.menu = data;
    })
  }

  public getCoreFooter() {
    this.requestService.getRequest('footer').subscribe((data: any) => {
      this.footer = data;
    })
  }

}
