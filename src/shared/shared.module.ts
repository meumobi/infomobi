import { NgModule } from '@angular/core';

import { MeuToastProvider } from './meu-toast.service';
import { AnalyticsProvider } from './analytics.service';
import { ImgServerUrlyPipe } from '@pipes/.';
import { ImgServerSrcsettifyPipe } from '@pipes/.';
import { SafeUrlPipe } from '@pipes/.';
import { MomentModule } from 'ngx-moment';
import { IonicImageViewerModule } from 'ionic-img-viewer';


const sharedModules = [
  MomentModule,
  IonicImageViewerModule
];

@NgModule({
  imports: [
    sharedModules,
  ],
  declarations: [
    ImgServerUrlyPipe,
    ImgServerSrcsettifyPipe,
    SafeUrlPipe
  ],
  providers: [
    MeuToastProvider,
    AnalyticsProvider
  ],
  exports: [
    ImgServerUrlyPipe,
    ImgServerSrcsettifyPipe,
    SafeUrlPipe,
    sharedModules
  ]
})
export class SharedModule { }