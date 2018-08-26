import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GooglePlaceDirective } from './google-place.directive';


@NgModule({
  declarations: [
    AppComponent,
    GooglePlaceDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
