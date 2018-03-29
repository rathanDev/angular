import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SimpleHttpComponent} from './simple-http/simple-http.component';
import {HttpModule} from '@angular/http';
import {SearchResultComponent} from './search-result/search-result.component';
import {youTubeSearchInjectables} from './you-tube-search-injectables';
import { SearchBoxComponent } from './search-box/search-box.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    youTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
