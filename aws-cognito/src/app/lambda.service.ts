import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LambdaService {

  data: any;

  constructor(private http: HttpClient) {
  }

  callSepLambda() {
    console.log('callSepLambda');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('https://dlbegkmn8g.execute-api.us-east-1.amazonaws.com/dev/sep-resource', httpOptions);
  }

}
