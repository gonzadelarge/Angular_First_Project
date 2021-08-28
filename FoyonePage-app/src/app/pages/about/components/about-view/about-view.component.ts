import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Iabout } from '../../models/iabout';

@Component({
  selector: 'foyone-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss']
})
export class AboutViewComponent implements OnInit {

  public aboutView?: Iabout

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getHome();
  }

  public getHome() {
    this.requestService.getRequest('about').subscribe( (dataHome: any) => {
      this.aboutView = dataHome;
    })
  }

}
