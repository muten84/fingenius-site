import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),data: {animation: 'HomePage'}

  },

  {
    path: 'about',
    loadChildren: () => import('./about-us-page/about-us-page.module').then(m => m.AboutUsPageModule),data: {animation: 'AboutPage'}

  },
 /*  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  } */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
