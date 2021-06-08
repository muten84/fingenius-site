import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';



@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    FeaturesSectionComponent,
    TestimonialsSectionComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NgbModule
  ]
})
export class HomePageModule { }
