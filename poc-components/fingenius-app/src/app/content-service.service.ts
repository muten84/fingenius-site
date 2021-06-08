import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MenuContent, MenuList} from './model/menu-content';
import {SlideItem} from './model/slides-content';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private httpClient: HttpClient) { }


  public getHeaderMenuContent() : Promise<Array<MenuContent>>{
    return this.httpClient.get('assets/model/header/menu/content.json').pipe(
      map((val) => {
       const menu : MenuList =  val as MenuList;
        return menu.menu;
      })

    ).toPromise();
  }

  public getSlidesContent() : Promise<Array<SlideItem>>{
    return this.httpClient.get('assets/model/hero/slides/content.json').pipe(
      map((val) => {
       const menu : any =  val as any;
        return menu.slides;
      })

    ).toPromise();
  }


}
