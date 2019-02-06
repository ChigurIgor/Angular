import { Component } from '@angular/core';
import {NewServiceService} from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>My text</h1>
  //     <img src="./favicon.ico">`,
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'My New Title';
  constructor(svc: NewServiceService) {
    svc.consoleText('Hello world');
  }
}
