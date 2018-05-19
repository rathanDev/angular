import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {RoutingModule} from './routing/routing.module';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
