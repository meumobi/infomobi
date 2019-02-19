import { IsAdminDirective } from './../directives/is-admin';
import { HasRoleDirective } from './../directives/has-role';
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


const sharedModules = [
  MomentModule,
  IonicImageViewerModule,
  CategoryLabelModule
];

@NgModule({
  imports: [
    sharedModules
  ],
  declarations: [
    ImgServerUrlyPipe,
    ImgServerSrcsettifyPipe,
    SafeUrlPipe,
    SearchPipe,
    KeysPipe,
    IconPathForContactTypePipe,
    HasRoleDirective,
    IsAdminDirective,
  ],
  providers: [
    MeuToastService,
    AnalyticsProvider
  ],
  exports: [
    ImgServerUrlyPipe,
    ImgServerSrcsettifyPipe,
    SafeUrlPipe,
    SearchPipe,
    KeysPipe,
    IconPathForContactTypePipe,
    HasRoleDirective,
    IsAdminDirective,
    sharedModules
  ]
})
export class SharedModule {}
