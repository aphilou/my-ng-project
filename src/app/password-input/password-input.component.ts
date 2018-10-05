import { Component, OnInit, OnChanges, DoCheck, Input, Output, EventEmitter } from '@angular/core';

export const VISIBLE = 'visible';
export const HIDDEN = 'hidden';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements OnInit, DoCheck {

  state = HIDDEN;
  internalPassword: string;

  // Important le suffix Change caractérise l'évnement sur l'attribut password
  @Output() passwordChange = new EventEmitter();

  @Input() get password() {
    return this.internalPassword;
  }

  set password(val) {
    this.internalPassword = val;
    this.passwordChange.emit(this.internalPassword);
  }

  constructor() { }

  ngOnInit() {
    console.log('PasswordInpuctComponent init');
  }

  ngDoCheck() {
    console.log('PasswordInpuctComponent check', 'internalPassword', this.internalPassword);
  }

  toggle() {
    console.log('myPassword', this.internalPassword);
    if (this.state === HIDDEN) {
      this.state = VISIBLE;
    } else {
      this.state = HIDDEN;
    }
  }
}
