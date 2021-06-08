import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from '../content-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  recents: any;

  about: any;

  contacts: any

  constructor(private contentService: ContentServiceService) { }

  ngOnInit(): void {
    this.contentService.getFooterContent().then(footer => {
      this.recents = footer.recents;
      this.about = footer.about;
      this.contacts = footer.contact;
    })
  }

}
