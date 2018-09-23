import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ApiService {
  
  constructor(private http: HttpClient) {
  }

  callAuthHttp(token: string) {
    console.log('auth', token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this.http.get('https://wwjaipowli.execute-api.us-east-1.amazonaws.com/dev/sep-auth-resources', httpOptions);
  }

  callHttp() {
    console.log('call');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('https://dlbegkmn8g.execute-api.us-east-1.amazonaws.com/dev/sep-resource', httpOptions);
  }

}
