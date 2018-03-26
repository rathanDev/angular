import {Component} from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular2', 'https://angular.io', 3),
      new Article('Fullstack', 'https://fullstack.io', 2),
      new Article('React', 'https://react.io', 1)
    ]
  }

}
