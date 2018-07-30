import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelpComponent} from '../help/help.component';
import {FaqComponent} from '../faq/faq.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'help', component: HelpComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
