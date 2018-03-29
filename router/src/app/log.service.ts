import {Injectable} from '@angular/core';

@Injectable()
export class LogService {

  constructor() {
  }

  print(msg: string) {
    console.log(msg);
  }

}
