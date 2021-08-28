import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { AboutInfoComponent } from './components/about-view/about-info/about-info.component';
import { AboutBioComponent } from './components/about-view/about-bio/about-bio.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from 'src/app/service/request.service';


@NgModule({
  declarations: [
    AboutViewComponent,
    AboutInfoComponent,
    AboutBioComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule
  ],
  providers: [RequestService]
})
export class AboutModule { }
