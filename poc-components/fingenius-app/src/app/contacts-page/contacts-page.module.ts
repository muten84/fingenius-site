import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ContactsPageRoutingModule} from './contacts-page-routing.module';
import { FinLocationComponent } from './fin-location/fin-location.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RecaptchaModule } from "ng-recaptcha";
import { GrecaptchaComponent } from './grecaptcha/grecaptcha.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ContactFormComponent,
    FinLocationComponent,
    GrecaptchaComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    ContactsPageRoutingModule,
    RecaptchaModule,
    FormsModule,
    NgbModule
  ]
})
export class ContactsPageModule { }
