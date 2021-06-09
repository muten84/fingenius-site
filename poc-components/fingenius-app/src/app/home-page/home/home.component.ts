import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
