import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

const VISIBLE = 'visible';
const HIDDEN = 'hidden';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements OnInit, OnChanges, DoCheck {

  state = HIDDEN;
  myPassword: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('onChange');
  }

  ngDoCheck() {
    console.log('myPassword', this.myPassword);
  }

  toggle() {
    console.log('myPassword', this.myPassword);
    if (this.state === HIDDEN) {
      this.state = VISIBLE;
    } else {
      this.state = HIDDEN;
    }
  }
}
