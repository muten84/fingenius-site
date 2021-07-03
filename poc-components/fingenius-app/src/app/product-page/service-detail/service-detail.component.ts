import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ContentServiceService } from 'src/app/content-service.service';


@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  id: string = '';

  sub: Subscription;

  content$: Promise<any> | undefined;

  content: any;

  constructor(private router: Router, private route: ActivatedRoute, private contentService: ContentServiceService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("service params id is", this.id);
      this.content$ = this.contentService.getServiceById(this.id);
    });
  }

  ngOnInit() {
    this.content$?.then(content=>{
      this.content = content[0];
    })
  }

}
