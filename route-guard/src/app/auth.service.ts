import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public isAuthenticated() {
    const token = localStorage.getItem('token');
    console.log('token', token);
    console.log('isAuth?', !!token);
    // return !!token;

    if (!token) {
      return of(false);
    }
    return of(true);
  }

  public login() {
    console.log('login');
    localStorage.setItem('token', 'aToken');
    const token = localStorage.getItem('token');
    console.log('token', token);
  }

  public logout() {
    console.log('logout');
    localStorage.removeItem('token');

    const token = localStorage.getItem('token');
    console.log('token', token);
  }

}
