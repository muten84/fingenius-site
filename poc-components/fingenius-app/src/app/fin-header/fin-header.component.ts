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
   /* document.querySelector('')
   const enter = fromEvent(event.target, 'mouseenter');
    enter.pipe(
      scan((i) => ++i, 1),
      debounce((i) => interval(200 * i))
    ).subscribe(x => console.log(x)); */
  }

  mouseOut() {
    console.log('mouseout');
/*     this.animationState  == 'in'?this.animationState = 'out':'in';
 */
// debounce((i) => interval(200 * i))
  }

  mouseIn(event: any, childs: any) {
    console.log('mousein', event, childs);

    /* if(childs && childs.length >0){
      this.animationState  == 'out'?this.animationState = 'in':'out';
      return;
    }
    this.animationState ='out'; */

  }
}
