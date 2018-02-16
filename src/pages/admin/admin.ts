import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDatabaseProvider } from '../../providers/firebase-database/firebase-database';
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
  public item: any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afd: FirebaseDatabaseProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
    this.afd.getData('resource').valueChanges().subscribe(res => {
      this.testValue = res
      console.log(this.testValue);
    })
  }
  
  addSource() {
    this.afd.addData('resource', this.source);
    this.clearValue();
  }
  
  clearValue() {
    this.source = '';
  }
  
 
  pushData() {
    this.afd.addData('item',this.item);
  }
}
