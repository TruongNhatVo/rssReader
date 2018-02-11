import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseDatabaseProvider {

  constructor(public http: Http, public afd: AngularFireDatabase) {
  }
  
  getData(url: string) {
    return this.afd.list(url);
  }

  addData(url:string, value:string) {
    this.afd.list(url).push(value);
  }
  
  removeItem(url:string, id:string) {
    this.afd.list(url).remove(id);
  }

}
