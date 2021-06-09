import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from 'src/app/content-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  about :any = {}

  constructor(private contentService :ContentServiceService) { }

  ngOnInit(): void {
    this.contentService.getAboutUsContent().then(about => {
      this.about = about;
    })
  }

}
