import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { IinfoStatus } from 'src/app/shared/components/info-status/models/istatus';
import { Imusica } from '../../models/imusica';

@Component({
  selector: 'foyone-musica-view',
  templateUrl: './musica-view.component.html',
  styleUrls: ['./musica-view.component.scss']
})
export class MusicaViewComponent implements OnInit {

  public musicaView?: Imusica
  public infoStatusConfig!: IinfoStatus

  constructor(private requestService: RequestService) { 
    this.infoStatusConfig = this.configStatus()
   }

  ngOnInit(): void {
    this.getMusica();
  }

  public getMusica() {
    this.requestService.getRequest('musica').subscribe( (dataHome: any) => {
      this.musicaView = dataHome
      console.log(this.musicaView)
    })
  }

  public configStatus(): IinfoStatus {
    return {
        title: 'Música',
        img: {
          link:"http://localhost:4200",
          src: "https://yt3.ggpht.com/ytc/AKedOLSMBVUbHROb5HLW0l63zemWhy3KJduNBmwHknshgA=s900-c-k-c0x00ffffff-no-rj",
          alt: "Foyone Logo"
        }
      }
    }

}
