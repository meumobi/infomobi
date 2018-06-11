import { NgModule } from '@angular/core';

import { MeuToastProvider } from './meu-toast.service';
import { AnalyticsProvider } from './analytics.service';
import { ImgServerUrlyPipe } from '@pipes/.';
import { ImgServerSrcsettifyPipe } from '@pipes/.';
import { SafeUrlPipe } from '@pipes/.';
import { SearchPipe } from '@pipes/.';
import { MomentModule } from 'ngx-moment';
import { SuperTabsModule } from 'ionic2-super-tabs';

const sharedModules = [
  MomentModule,
  SuperTabsModule
];

@NgModule({
  imports: [
    sharedModules
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