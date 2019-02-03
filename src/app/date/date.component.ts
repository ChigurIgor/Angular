import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
// message: string = 'world';
// message: string ;
// items = ["Angular", "React","View", "Bootstrap"];

  loggedIn= true;
  constructor() {


    // setInterval(() => {
    //   // this.message=""+this.iii++;
    //   // this.message = new Date().toLocaleTimeString();
    // }, 1000);
  }

  ngOnInit() {
  }

}
