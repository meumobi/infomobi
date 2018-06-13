import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { LivePage } from '@pages/live/live';
import { ContactsPage } from '@pages/contacts/contacts';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostsPage } from '@pages/posts/posts';
import { PostsProvider } from '@providers/posts';
import { CommentsProvider } from '@providers/comments';
import { UploadProvider } from '@providers/upload';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ENV } from '@env';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    LivePage,
    ContactsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp),
    SharedModule,
    HttpClientModule,
    IonicImageViewerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(ENV.firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LivePage,
    ContactsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommentsProvider,
    AngularFirestoreModule,
    UploadProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}
