import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleplayTabsPage } from '../pages/googleplay-tabs/googleplay-tabs';
import { AdminPage } from '../pages/admin/admin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = AdminPage ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      if (platform.is('cordova')) {
        statusBar.styleDefault();
        splashScreen.hide();
      }
    });
  }
}

