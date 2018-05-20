import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {RoutingModule} from './routing/routing.module';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import { ConfirmComponent } from './confirm/confirm.component';
import { S3Component } from './s3/s3.component';
import {S3Service} from './s3.service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ConfirmComponent,
    S3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [AuthService, S3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
