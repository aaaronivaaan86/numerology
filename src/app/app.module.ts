import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TooltipsModule } from 'ionic-tooltips';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { Stripe } from '@ionic-native/stripe';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ServicesPage } from '../pages/services/services';
import { ResultsPage } from '../pages/results/results';
import { DetailsPage } from '../pages/details/details';
import { RemoveModalPage } from '../pages/remove-modal/remove-modal';

import { SplashScreen } from '@ionic-native/splash-screen';
import { CheckoutPage } from '../pages/checkout/checkout';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LegalPage } from '../pages/legal/legal';
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    RemoveModalPage,
    ServicesPage,
    ResultsPage,
    DetailsPage,
    CheckoutPage,
    TutorialPage,
    LegalPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TooltipsModule.forRoot(),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,  
    AboutPage,
    ContactPage,
    RemoveModalPage,
    ServicesPage,
    ResultsPage,
    DetailsPage,
    CheckoutPage,
    TutorialPage,
    LegalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileOpener,
    Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
