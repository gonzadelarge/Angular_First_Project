import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaViewComponent } from './components/musica-view/musica-view.component';

const routes: Routes = [
  {
    path: '',
    component: MusicaViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicaRoutingModule { }
