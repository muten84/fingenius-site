import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path: 'detail/:id',
    component: ServiceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }
