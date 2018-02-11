import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { GoogleplayTabsPage } from '../pages/googleplay-tabs/googleplay-tabs';
import { AdminPage } from '../pages/admin/admin';
import { ListNewsComponent } from '../components/list-news/list-news';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseDatabaseProvider } from '../providers/firebase-database/firebase-database';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

var config = {
  apiKey: "AIzaSyDjIBpwaIAo0xI1NNVp0PwL2ykQu8wyWBU",
  authDomain: "rssproject-ce04f.firebaseapp.com",
  databaseURL: "https://rssproject-ce04f.firebaseio.com",
  projectId: "rssproject-ce04f",
  storageBucket: "rssproject-ce04f.appspot.com",
  messagingSenderId: "173610884591"
};

@NgModule({
  declarations: [
    MyApp,
    GoogleplayTabsPage,
    AdminPage,
    ListNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoogleplayTabsPage,
    AdminPage,
    ListNewsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDatabaseProvider,
    HttpModule,
    AngularFireDatabase,
    AngularFireModule
  ]
})
export class AppModule {}
