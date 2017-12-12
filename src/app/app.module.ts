import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';

// AngularFire2 account settings
export const firebaseConfig = {
  apiKey: "AIzaSyD9EmXVKrIIJsNO0azStFt7ImsAe71BZD0",
  authDomain: "ionbasics.firebaseapp.com",
  databaseURL: "https://ionbasics.firebaseio.com",
  projectId: "ionbasics",
  storageBucket: "ionbasics.appspot.com",
  messagingSenderId: "57683347176"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ResetPasswordPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ResetPasswordPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
