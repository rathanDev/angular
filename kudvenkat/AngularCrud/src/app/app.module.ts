import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeCreationComponent} from './employee/employee-creation/employee-creation.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'list', component: EmployeeListComponent},
  {path: 'create', component: EmployeeCreationComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeCreationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
