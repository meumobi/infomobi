import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilesProvider } from 'ionic-meumobi-utils';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';

import { CommentsProvider } from '@providers/comments';
import { UploadProvider } from '@providers/upload';
import { DynamicLinksProvider } from '@providers/dynamic-links';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ENV } from '@env';
import { AuthService } from '@providers/auth';
import { ApiService } from '@providers/api';
import { AuthDataPersistenceService } from '@providers/auth-data-presistence';
import { UserProfileService } from '@providers/user-profile';
import { ContactsService } from '@providers/contacts';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'storage_db',
    }),
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(ENV.firebase),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileTransferObject,
    FileOpener,
    InAppBrowser,
    File,
    FilesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommentsProvider,
    AngularFirestoreModule,
    UploadProvider,
    AuthService,
    DynamicLinksProvider,
    ApiService,
    ContactsService,
    AuthDataPersistenceService,
    UserProfileService
  ]
})

export class AppModule {}