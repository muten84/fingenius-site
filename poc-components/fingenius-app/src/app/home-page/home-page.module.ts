import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import {HomePageRoutingModule} from './home-page-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HeroComponent,HomeComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NgbModule
  ]
})
export class HomePageModule { }
