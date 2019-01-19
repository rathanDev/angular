import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //jwtHelper: JWT
  constructor() {
  }

  public isAuthenticated(): boolean {
    // const token = localStorage.getItem('token');
    // return this.jwtHelper.isTokenExpired(token);
    return true;
  }


}
