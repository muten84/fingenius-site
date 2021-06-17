import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from 'src/app/content-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  name: string = '';

  surname: string = '';

  email: string = '';

  message : string = '';

  sendEnabled: boolean = false;

  token : string  = '';

  constructor(private contentService: ContentServiceService) { }

  ngOnInit(): void {
  }

  sendMail(){
    console.log('send mail to', this.name, this.surname, this.email, this.message);
    this.contentService.verifyToken(this.token).then((r: any)=> {
      if(r.success) {
        this.contentService.sendMail(this.email, this.name+" "+this.surname, this.message).then(done=> {
          console.log('mail sent', done);
        })
      }
      else{
        this.sendEnabled = false;

      }
    });

  }

  enableSend(token: string){
    this.token=token;
    this.sendEnabled = true;
  }

  disableSend() {
    this.sendEnabled = false;

  }
}
