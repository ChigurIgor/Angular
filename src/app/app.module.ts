import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MynewcomponentComponent } from './mynewcomponent/mynewcomponent.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    MynewcomponentComponent,
    DateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
