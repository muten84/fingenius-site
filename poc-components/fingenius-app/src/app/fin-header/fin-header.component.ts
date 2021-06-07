import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from '../content-service.service';
import { MenuContent, MenuList } from '../model/menu-content';

@Component({
  selector: 'app-fin-header',
  templateUrl: './fin-header.component.html',
  styleUrls: ['./fin-header.component.css']
})
export class FinHeaderComponent implements OnInit {

  menuContent$: Promise<Array<MenuContent>> =  this.contentService.getHeaderMenuContent();

  constructor(private readonly contentService: ContentServiceService) {
  }

 ngOnInit(): void {

   console.log('menu initialized', this.menuContent$);
  }

}
