import { Component, OnInit, Output, EventEmitter} from '@angular/core';

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

}
