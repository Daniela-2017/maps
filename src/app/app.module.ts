import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDj6YLOn08372zGvw4l01tFCs20jToN8XE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
