import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { IinfoStatus } from 'src/app/shared/components/info-status/models/istatus';
import { Ihome } from '../../models/ihome';

@Component({
  selector: 'foyone-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public homeInfo?: Ihome

  public infoStatusConfig!: IinfoStatus

  constructor(private requestService: RequestService) { 
    this.infoStatusConfig = this.configStatus()
   }

  ngOnInit(): void {
    this.getHome();
  }

  public getHome() {
    this.requestService.getRequest('home').subscribe( (dataHome: any) => {
      this.homeInfo = dataHome
    })
  }

  public configStatus(): IinfoStatus {
      return {
        title: 'Bienvenido',
        img: {
          link:"http://localhost:4200",
          src: "https://yt3.ggpht.com/ytc/AKedOLSMBVUbHROb5HLW0l63zemWhy3KJduNBmwHknshgA=s900-c-k-c0x00ffffff-no-rj",
          alt: "Foyone Logo"
        }
      }
    }
  

}
