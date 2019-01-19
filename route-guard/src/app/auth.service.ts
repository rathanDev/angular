import {Injectable} from '@angular/core';

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
    return !!token;
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
