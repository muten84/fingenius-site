import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'fingenius-app';

  prepareRoute(outlet: RouterOutlet) {
    console.log('outlet.activatedRouteData', outlet.activatedRouteData);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    //return slideInAnimation;
  }
}
