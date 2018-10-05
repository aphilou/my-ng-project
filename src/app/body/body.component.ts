import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, DoCheck {

  myPassword = 'toto';

  constructor() { }

  ngOnInit() {
    console.log('body');
  }

  ngDoCheck() {
    console.log('myPassword', this.myPassword);
  }

}
