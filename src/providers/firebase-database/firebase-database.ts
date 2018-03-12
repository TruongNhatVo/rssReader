import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseDatabaseProvider {

  constructor(
    public http: Http,  
    public afd: AngularFireDatabase,
  ) {
  }
  
  getData(url: string) {
    return this.afd.list(url);
  }

  addData(url:string, value:string) {
    return this.afd.list(url).push(value);
  }
  
  removeItem(url:string, id:string) {
    this.afd.list(url).remove(id);
  } 

  checkExistData(path,data) {
    this.afd.database.ref().child(path).once('value', snapshot => {
      !snapshot.hasChild(data) ? console.log('not exist data') : console.log('exist data');
    })
  }
}
