import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManyTabsPage } from '../pages/many-tabs/many-tabs';
import { GoogleplayTabsPage } from '../pages/googleplay-tabs/googleplay-tabs';
import { TestPage } from '../pages/test/test';
import { ListNewsComponent } from '../components/list-news/list-news';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManyTabsPage,
    GoogleplayTabsPage,
    TestPage,
    ListNewsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ManyTabsPage,
    TestPage,
    GoogleplayTabsPage,
    ListNewsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
