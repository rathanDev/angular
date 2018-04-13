import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SimpleHttpComponent} from './simple-http/simple-http.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {youTubeSearchInjectables} from './you-tube-search.injectables';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient, youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule {
}
