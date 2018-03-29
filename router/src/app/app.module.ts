import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroComponent} from './hero/hero.component';
import {LogService} from './log.service';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroComponent},
  {path: 'log', component: LogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
