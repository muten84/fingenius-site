import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from 'src/app/content-service.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

 about: any  = {
   sections: []
 };

  constructor(private contentService: ContentServiceService) { }

  ngOnInit(): void {
    this.contentService.getAboutContent().then(about => {
      this.about = about;
    })
  }

}
