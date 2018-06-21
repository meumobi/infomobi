import { NgModule } from '@angular/core';
import { MeuToastProvider } from './meu-toast.service';
import { AnalyticsProvider } from './analytics.service';
import { ImgServerUrlyPipe } from '@pipes/.';
import { ImgServerSrcsettifyPipe } from '@pipes/.';
import { SafeUrlPipe } from '@pipes/.';
import { SearchPipe } from '@pipes/.';
import { MomentModule } from 'ngx-moment';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { TranslateModule } from '@ngx-translate/core';

const sharedModules = [
  MomentModule,
  IonicImageViewerModule
];

@NgModule({
  imports: [
    sharedModules,
    TranslateModule.forChild()
  ],
  declarations: [
    ImgServerUrlyPipe,
    ImgServerSrcsettifyPipe,
    SafeUrlPipe,
    SearchPipe
  ],
  providers: [
    MeuToastProvider,
    AnalyticsProvider
  ],
  exports: [
    ImgServerUrlyPipe,
    ImgServerSrcsettifyPipe,
    SafeUrlPipe,
    SearchPipe,
    sharedModules
  ]
})
export class SharedModule { }