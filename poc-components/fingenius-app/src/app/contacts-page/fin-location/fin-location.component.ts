import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-fin-location',
  templateUrl: './fin-location.component.html',
  styleUrls: ['./fin-location.component.scss']
})
export class FinLocationComponent implements OnInit {

  apiLoaded: Observable<boolean>;

  options: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom : 14
  };

  marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
 }



  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCcibw0q-UovE6-oZZh-Qo4guyyX1QxgU4', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
   }


  ngOnInit(): void {
  }

}
