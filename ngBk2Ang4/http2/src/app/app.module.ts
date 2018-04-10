import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {youTubeSearchInjectables} from './you-tube-search.injectables';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient, youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
