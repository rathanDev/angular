import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService,
              public router: Router) {
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('canActivate');

    const token = localStorage.getItem('token');
    console.log('token', token);
    if (!token) {
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);
  }

  // canActivate() {
/*
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('canActivate');

    const auth = this.auth.isAuthenticated().subscribe(
      res => {
        console.log('res ', res);
        if (res === true) {
          return of(true);
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
      },
      err => {
        console.log('err ', err);
        this.router.navigate(['/login']);
        return of(false);
      }
    );
  }
*/

}
