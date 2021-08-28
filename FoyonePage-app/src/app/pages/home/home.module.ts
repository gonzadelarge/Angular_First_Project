import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { RequestService } from 'src/app/service/request.service';
import { HomeInitComponent } from './components/home-view/home-init/home-init.component';
import { HomeMidComponent } from './components/home-view/home-mid/home-mid.component';
import { HomeEndComponent } from './components/home-view/home-end/home-end.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    HomeViewComponent,
    HomeInitComponent,
    HomeMidComponent,
    HomeEndComponent
  ],
  
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    IvyCarouselModule
  ],

  providers: [RequestService]
})
export class HomeModule { }
