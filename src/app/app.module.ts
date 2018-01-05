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
import { ListPage } from '../pages/list/list';
import { LivePage } from '../pages/live/live';
import { LoginPage } from '../pages/login/login';
import { LatestPage } from '../pages/latest/latest';
import { ContactsPage } from '../pages/contacts/contacts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedModule } from '../shared/shared.module';

import { ContactsProvider } from '../providers/contacts/';
import { ArticlesProvider } from '../providers/articles/';
import { PostsProvider } from '../providers/posts/';
import { MediaProvider } from '../providers/media/';
import { CategoriesProvider } from '../providers/categories/';
import { AuthProvider } from '../providers/auth/';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactsProvider,
    ArticlesProvider,
    PostsProvider,
    MediaProvider,
    CategoriesProvider,
    AuthProvider
  ]
})
export class AppModule {}
