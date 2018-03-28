import {Component, ReflectiveInjector} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string;

  //userService: UserService;

  // constructor() {
  //   const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
  //   this.userService = injector.get(UserService);
  // }

  constructor(private userService: UserService) {
    console.log('Init constructor with dependency');
  }

  signIn(): void {
    this.userService.setUser({
      name: 'Nate Murray'
    });

    this.userName = this.userService.getUser().name;
    console.log('User name: ', this.userName);
  }


}
