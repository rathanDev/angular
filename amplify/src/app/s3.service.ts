import {Injectable} from '@angular/core';
import Amplify, {Storage} from 'aws-amplify';
import {environment} from '../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  public getImageEvent: BehaviorSubject<string>;

  constructor() {
    Amplify.configure({
      Auth: environment.amplify.auth,
      Storage: environment.amplify.storage
    });

    this.getImageEvent = new BehaviorSubject('');
  }

  public uploadPicPublic(pic) {
    console.log('pic', pic);
    Storage
      .put(pic.name, pic, {
        level: 'public',
        contentType: 'image'
      })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
    /* contentType: 'image/png' */
  }

  public viewPicPublic(name) {
    Storage.get(name)
      .then(res => {
        console.log('res ', res);
        this.getImageEvent.next(res.toString());
      })
      .catch(err => {
        console.error('err', err);
      });
  }

  public listPublicPictures() {
    log('list Pictures');

    Storage
      .get('codePenXhr.png')
      .then(res => {
        console.log('res', res);
        this.getImageEvent.next(res.toString());
      })
      .catch(err => {
        console.error('err', err);
      });

  }

  public listPrivatePictures() {
    log('list private pics');
    Storage.put('app.module.ts', 'Hello')
      .then(result => console.log(result))
      .catch(err => console.error(err));
  }

}
