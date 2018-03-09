import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDatabaseProvider } from '../../providers/firebase-database/firebase-database';
import { HelperProvider } from '../../providers/helper/helper';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FirebaseDatabase } from '@firebase/database-types';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  
  public source: string;
  public testValue: any;  
  public rssItemForm: FormGroup;

  // test
  public itemsRef: AngularFireList<any>;
  public allResource: Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afd: FirebaseDatabaseProvider,
    private fb: FormBuilder
  ) {
    this.loadData('resource');
    this.getValueRssItemForm();
  }

  loadData(url) {
    this.itemsRef = this.afd.getData(url);
    this.allResource = this.itemsRef.snapshotChanges().map(res => {
      return res.map(c => ({
        key: c.payload.key,
        val: c.payload.val()
      }))
    });
  }

  /* initialze rss item form value */ 
  getValueRssItemForm() {
    this.rssItemForm = this.fb.group({
      'resourceId': [''],
      'category': [''],
      'url': ['']
    });
  }

  ionViewDidLoad() {
   
  }
  
  /* add all resource */ 
  addSource() {
    this.afd.addData('resource', this.source);
  }

  /* add all rssItem */ 
  pushData(rssItemForm) {
    let result = this.afd.addData('rssItem',rssItemForm.value);
  }


}
