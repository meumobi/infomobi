import { NgModule } from '@angular/core';
import { MeuToastService } from './meu-toast.service';
import { AnalyticsProvider } from './analytics.service';
import {
  SafeUrlPipe,
  SearchPipe,
  KeysPipe,
  IconPathForContactTypePipe,
  ImgServerUrlyPipe,
  ImgServerSrcsettifyPipe
 } from '@pipes/.';
import { MomentModule } from 'ngx-moment';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CategoryLabelModule } from '@components/category-label/category-label.module';
import { DirectivesModule } from './../directives/directives.module';


const sharedModules = [
  MomentModule,
  IonicImageViewerModule,
  CategoryLabelModule,
  DirectivesModule,
];

@NgModule({
  imports: [
    sharedModules,
  ],
  declarations: [
    ImgServerUrlyPipe,
    ImgServerSrcsettifyPipe,
    SafeUrlPipe,
    SearchPipe,
    KeysPipe,
    IconPathForContactTypePipe,
  ],
  providers: [
    MeuToastService,
    AnalyticsProvider,
  ],
  exports: [
    ImgServerUrlyPipe,
    ImgServerSrcsettifyPipe,
    SafeUrlPipe,
    SearchPipe,
    KeysPipe,
    IconPathForContactTypePipe,
    sharedModules,
  ]
})
export class SharedModule {}
