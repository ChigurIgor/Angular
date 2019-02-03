import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

isCollapsed = true;

  constructor() {

  }

  toogleColapse() {
    this.isCollapsed = !this.isCollapsed;
  }


  // myEvent(event){
  //   console.log(event);
  //   if(event.type=="click"){
  //     console.log("click");
  //   }
  // }
  ngOnInit() {
  }

}
