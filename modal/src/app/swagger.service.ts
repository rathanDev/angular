import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwaggerService {

  constructor(private http: HttpClient) {
  }

  getSwagger() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.get('http://localhost:9080/v2/api-docs', httpOptions).subscribe(
      res => {
        console.log('res ', res);
      },
      err => {
        console.log('err ', err);
      }
    );
  }

}
