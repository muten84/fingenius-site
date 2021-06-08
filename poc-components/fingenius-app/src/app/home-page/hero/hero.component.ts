import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ContentServiceService } from 'src/app/content-service.service';
import { SlideItem } from 'src/app/model/slides-content';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [NgbCarouselConfig]
})
export class HeroComponent implements OnInit {

//  images = [944, 1011, 984].map((n) => `https://via.placeholder.com/1980x400.png`);
  slides$: Promise<Array<SlideItem>> =  this.contentService.getSlidesContent();



  constructor(config: NgbCarouselConfig, private contentService: ContentServiceService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }

}
