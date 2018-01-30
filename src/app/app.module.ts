import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LivePage } from '../pages/live/live';
import { LoginPage } from '../pages/login/login';
import { LatestPage } from '../pages/latest/latest';
import { ContactsPage } from '../pages/contacts/contacts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { OneSignal } from '@ionic-native/onesignal';
import { SharedModule } from '../shared/shared.module';

import { ContactsProvider } from '../providers/contacts/';
import { ArticlesProvider } from '../providers/articles/';
import { PostsProvider } from '../providers/posts/';
import { MediaProvider } from '../providers/media/';
import { CategoriesProvider } from '../providers/categories/';
import { AuthProvider } from '../providers/auth/';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { IonicStorageModule } from '@ionic/storage';
import { FilesProvider } from '../providers/files/';


export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    ListPage,
    LivePage,
    LoginPage,
    LatestPage,
    ContactsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'storage_db',
    }),
    IonicImageViewerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    LivePage,
    LatestPage,
    ContactsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileTransferObject,
    FileOpener,
    InAppBrowser,
    File,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactsProvider,
    ArticlesProvider,
    PostsProvider,
    MediaProvider,
    CategoriesProvider,
    AuthProvider,
    FilesProvider
  ]
})
export class AppModule {}
