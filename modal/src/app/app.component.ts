import {Component} from '@angular/core';
import {SwaggerService} from './swagger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal';

  constructor(private swaggerService: SwaggerService) {

  }

  openModal() {
    const modal = document.getElementById('myModal');

// Get the button that opens the modal
    const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
    modal.style.display = 'block';
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  getSwagger() {
    this.swaggerService.getSwagger();
  }


}
