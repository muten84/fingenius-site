import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import {AboutUsRoutingModule} from './aboutus-routing.module';
import {AboutSectionComponent} from './about-section/about-section.component'
import {HomePageModule} from '../home-page/home-page.module';

@NgModule({
  declarations: [
    AboutUsComponent,
    AboutSectionComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    HomePageModule,
  ]
})
export class AboutUsPageModule { }