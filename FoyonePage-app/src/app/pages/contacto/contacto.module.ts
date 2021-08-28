import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/contact-view/forms/forms.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { InfoComponent } from './components/contact-view/info/info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RequestService } from 'src/app/service/request.service';


@NgModule({
  declarations: [ 
  
    FormsComponent, InfoComponent, ContactViewComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [RequestService]
})
export class ContactoModule { }
