import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {UserService} from './user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // { provide: UserService, useClass: UserService } - singleton
    UserService,
    {provide: 'API_URL', useValue: 'http://my.api.com/v1'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
