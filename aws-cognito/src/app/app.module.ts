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
import { SignInComponent } from './sign-in/sign-in.component';
import {LambdaService} from './lambda.service';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ConfirmComponent,
    S3Component,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, S3Service, ApiService, LambdaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
