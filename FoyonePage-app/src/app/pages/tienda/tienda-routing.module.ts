import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaViewComponent } from './components/tienda-view/tienda-view.component';

const routes: Routes = [
  {
    path: '',
    component: TiendaViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
