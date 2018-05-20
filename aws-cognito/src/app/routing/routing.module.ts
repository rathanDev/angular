import {NgModule} from '@angular/core';
 import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {ConfirmComponent} from '../confirm/confirm.component';

const routes: Routes = [
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // {path: 'dashboard', component: AppComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'confirm', component: ConfirmComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule {
}
