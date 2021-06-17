import { Component, OnInit, Output,EventEmitter } from '@angular/core';
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

  @Output('buttonClicked')
  btnClickedEmitter = new EventEmitter();

//  images = [944, 1011, 984].map((n) => `https://via.placeholder.com/1980x400.png`);
  slides$: Promise<Array<SlideItem>> =  this.contentService.getSlidesContent();



  constructor(config: NgbCarouselConfig, private contentService: ContentServiceService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    config.wrap = true;
    config.interval = 5000
    config.pauseOnFocus = false;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

  sendEvent() {
    console.log('request appointment');
    this.btnClickedEmitter.emit();

  }

}
