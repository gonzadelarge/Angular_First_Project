import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoStatusComponent } from './components/info-status/info-status.component';



@NgModule({
  declarations: [
    InfoStatusComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoStatusComponent
  ]
})
export class SharedModule { }
