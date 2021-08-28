import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Icontact } from '../../models/icontacto';

@Component({
  selector: 'foyone-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {

  public contactView?: Icontact;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getHome();
  }

  public getHome() {
    this.requestService.getRequest('contact').subscribe( (dataHome: any) => {
      this.contactView = dataHome;
    })
  }

}
