import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {QuoteComponent} from './quote/quote.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'quote', component: QuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
