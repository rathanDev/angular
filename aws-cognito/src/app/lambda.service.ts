import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LambdaService {

  data: any;

  constructor(private http: HttpClient) {
  }

  callAuthSepLambda() {
    console.log('callAuthSepLambda');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('https://wwjaipowli.execute-api.us-east-1.amazonaws.com/dev/sep-auth-resources', httpOptions);
  }

  callSepLambda() {
    console.log('call');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('https://dlbegkmn8g.execute-api.us-east-1.amazonaws.com/dev/sep-resource', httpOptions);
  }

}
