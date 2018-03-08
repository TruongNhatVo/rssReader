import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDatabaseProvider } from '../../providers/firebase-database/firebase-database';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  
  public source: string;
  public testValue: any;  
  
  // test
  public itemsRef: AngularFireList<any>;
  public allResource: Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afd: FirebaseDatabaseProvider
  ) {
    this.itemsRef = this.afd.getData('resource');
    // Use snapshotChanges().map() to store the key
    this.allResource = this.itemsRef.snapshotChanges().map(res => {
      return res.map(c => ({
        key: c.payload.key,
        val: c.payload.val()
      }))
    })
  }

  ionViewDidLoad() {
   
  }
  
  addSource() {
    this.afd.addData('resource', this.source);
    this.clearValue();
  }
  
  clearValue() {
    this.source = '';
  }
  
 
  pushData() {
    
  }
}
