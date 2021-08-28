import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaViewComponent } from './components/tienda-view/tienda-view.component';
import { TiendaInfoComponent } from './components/tienda-view/tienda-info/tienda-info.component';
import { TiendaMidComponent } from './components/tienda-view/tienda-mid/tienda-mid.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from 'src/app/service/request.service';


@NgModule({
  declarations: [
    TiendaViewComponent,
    TiendaInfoComponent,
    TiendaMidComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    HttpClientModule
  ],
  providers: [RequestService]
})
export class TiendaModule { }
