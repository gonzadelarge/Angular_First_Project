import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicaRoutingModule } from './musica-routing.module';
import { MusicaViewComponent } from './components/musica-view/musica-view.component';
import { MusicaInfoComponent } from './components/musica-view/musica-info/musica-info.component';
import { MusicaCardComponent } from './components/musica-view/musica-card/musica-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from 'src/app/service/request.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MusicaViewComponent,
    MusicaInfoComponent,
    MusicaCardComponent
  ],
  imports: [
    CommonModule,
    MusicaRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [RequestService]
})
export class MusicaModule { }
