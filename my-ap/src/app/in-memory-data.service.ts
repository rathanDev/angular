import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    console.log('Create db');

    const heroes = [
      {id: 11, name: 'Mrs. Nice'},
      {id: 12, name: 'Narcoti'},
      {id: 13, name: 'Bomba'},
      {id: 14, name: 'Cele'},
      {id: 15, name: 'Mag'},
      {id: 16, name: 'RubberWoman'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];

    console.log('heroes', heroes);
    return {heroes};
  }

}
