import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MenuContent, MenuList} from './model/menu-content';
import {SlideItem} from './model/slides-content';
import {map, filter} from 'rxjs/operators'

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

  public getFooterContent() : Promise<any>{
    return this.httpClient.get('assets/model/footer/content.json').pipe(
      map((val: any) => {
       return val.footer;
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

  public getAboutContent() : Promise<any> {
    return this.httpClient.get('assets/model/about/content.json').pipe(
      map((val) => {
       const menu : any =  val as any;
        return menu.about;
      })

    ).toPromise();
  }

  public getAboutContentSections() : Promise<any> {
    return this.httpClient.get('assets/model/about/content.json').pipe(
      map((val) => {
       const menu : any =  val as any;
       debugger;
        return menu.about.sections;
      })

    ).toPromise();
  }

  public getAboutUsContent() : Promise<any> {
    return this.httpClient.get('assets/model/about-us/content.json').pipe(
      map((val) => {
       const menu : any =  val as any;
        return menu['about-us'];
      })

    ).toPromise();
  }

  public getServiceById(id: string) : Promise<any> {
    return this.httpClient.get('assets/model/services/detail/content.json').pipe(
      map((val) => {
       const menu : any =  val as any;
       debugger;
        return menu['services'].filter((e: { id: string; })=>{
          debugger;
          return e.id===id
        });
      }),
      /* filter(e=>{
        debugger;
        return e.id===id
      }) */

    ).toPromise();
  }

  public sendMail(destination: string, name: string, msg: string) : Promise<any> {
    const key = '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';
    const url = 'https://api.sendinblue.com/v3/smtp/email';
    const data : any = {
      "sender":{
         "name":name,
         "email":destination
      },
      "to":[
         {
            "email": 'info@fingenius.it',
            "name": name
         }
      ],
      "subject":"Richiesta contatto da "+name,
      "htmlContent":"<html><head></head><body><p>Spett.le Fin.Gen.Ius S.r.l,</p>"+msg+"</p></body></html>"
   }

    return this.httpClient.post(url,data, {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'api-key': ''+key,
        'Accept':'application/json',
      })
    }).toPromise();
  }


  verifyToken(token: string) {
 /*    const key = '6Lf5HTwbAAAAAPVvP7wpc_6YPkGYDhFNsWxmFObu';
    const params :HttpParams = new HttpParams();
    params.append('secret', 'key');
    params.append('response', token); */
    return this.httpClient.get('https://europe-central2-precise-ratio-302609.cloudfunctions.net/verifyToken?token='+token).toPromise();
  }


}
