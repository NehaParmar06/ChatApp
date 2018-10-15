import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SigninPage } from '../pages/signin/signin';

const config = {
  apiKey: 'AIzaSyAPE5gUnupkp0TwNtV3OwPA7SAdGrTiJ3c',
  authDomain: 'chatapp-e1420.firebaseapp.com',
  databaseURL: 'https://chatapp-e1420.firebaseio.com/',
  projectId: 'chatapp-e1420',
  storageBucket: 'gs://chatapp-e1420.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
