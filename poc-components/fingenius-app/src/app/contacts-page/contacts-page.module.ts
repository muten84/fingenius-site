import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ContactsPageRoutingModule} from './contacts-page-routing.module';
import { FinLocationComponent } from './fin-location/fin-location.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    ContactFormComponent,
    FinLocationComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    ContactsPageRoutingModule
  ]
})
export class ContactsPageModule { }
