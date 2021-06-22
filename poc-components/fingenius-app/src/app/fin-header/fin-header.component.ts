import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from '../content-service.service';
import { MenuContent, MenuList } from '../model/menu-content';
import {SlideInOutAnimation} from '../animations';
import { scan, debounce } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';


@Component({
  selector: 'app-fin-header',
  templateUrl: './fin-header.component.html',
  styleUrls: ['./fin-header.component.css'],
  animations: [SlideInOutAnimation]
})
export class FinHeaderComponent implements OnInit {

  menuContent$: Promise<Array<MenuContent>> =  this.contentService.getHeaderMenuContent();
  animationState: string = 'in';

  constructor(private readonly contentService: ContentServiceService) {
  }

 ngOnInit(): void {

   console.log('menu initialized', this.menuContent$);

  }

  mouseOut() {
    console.log('mouseout');

  }

  mouseIn(event: any, childs: any) {
    console.log('mousein', event, childs);



  }



  scrollTo() {
      const el2 = document.querySelector('#contact-form');
      if(el2){
        el2.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
  }
}
