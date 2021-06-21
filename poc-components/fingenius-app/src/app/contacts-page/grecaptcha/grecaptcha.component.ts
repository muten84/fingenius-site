import { Component, OnInit, Output, EventEmitter, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'app-grecaptcha',
  templateUrl: './grecaptcha.component.html',
  styleUrls: ['./grecaptcha.component.css']
})
export class GrecaptchaComponent implements OnInit {

  @Output('resolved')
  resolvedEmitter = new EventEmitter();

  @Output('error')
  erorrEmitter = new EventEmitter();

  @ViewChild('captchaRef') captchaRef: any;

  constructor() { }

  ngOnInit(): void {
  }

  resolved(captchaResponse: string) {
    //console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.resolvedEmitter.emit(captchaResponse);
  }

  errored(error : any) {
    this.erorrEmitter.emit(error);
  }

  @Input('reset')
  set reset (r: boolean) {
    console.log('reset recaptcha', r);
    if(!r){

    }
    else{
      if(this.captchaRef)
      this.captchaRef.reset();
    }
  }

}
