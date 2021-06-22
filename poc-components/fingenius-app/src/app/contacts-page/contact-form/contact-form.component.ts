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

  dirty: boolean = false;

  mailSent: boolean = false;

  mailError: boolean = false;

  reset: boolean = false;

  incomplete: boolean  = false;


  constructor(private contentService: ContentServiceService) { }

  ngOnInit(): void {
  }

  onChange(){
    console.log('on change keypress')
    this.reset=true;
  }

  sendMail(){
    this.mailError=false;
    this.mailSent=false;
    this.incomplete=false;
    this.dirty=false;
    this.sendEnabled=false;
    if((!this.name || !this.surname || !this.email || !this.message ) && !this.token){
      this.dirty=true;
      this.incomplete=true;
      setTimeout(()=>{
        this.scroll(null);

      },500);
      return;
    }
    if((this.name && this.surname && this.email && this.message ) && !this.token){
      this.sendEnabled=true;
      this.dirty=false;
      setTimeout(()=>{
        this.scroll(null);

      },500);
      return;
    }

    if((this.name && this.surname && this.email && this.message ) && this.token){
      this.sendEnabled=true;
      this.dirty=false;
      console.log('send mail to', this.name, this.surname, this.email, this.message);

      this.contentService.verifyToken(this.token).then((r: any)=> {
        console.log('response is', r);

        if(r.success) {
          this.contentService.sendMail(this.email, this.name+" "+this.surname, this.message).then(done=> {
            console.log('mail sent', done);
            this.mailSent = true;
            this.mailError=false;
            this.sendEnabled=false;
            this.dirty=true;
          }).catch(err =>{
            this.mailError=true;
            setTimeout(()=>{
              this.scroll(null);

            },500);          })
        }
        else{
          this.mailError=true;
          this.sendEnabled=true;
          this.dirty=false;
          setTimeout(()=>{
            this.scroll(null);

          },500);
        }
      }).catch(err => {
        this.mailError=true;
        this.mailSent = false;
        this.sendEnabled=true;
        this.dirty=false;
        setTimeout(()=>{
          this.scroll(null);

        },500);      });
    }


  }

  enableSend(token: string){
    this.token=token;
    this.sendEnabled = true;
  }

  disableSend() {
    this.sendEnabled = false;

  }

  scroll(el: any) {
    console.log('request appointment', el);
    if(!el){
      const el2 = document.querySelector('#alert-box');
      if(el2){
        el2.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;

    }
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

}
