import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosPage } from './videos';

import { VideosProvider } from '../../providers/videos';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    VideosPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(VideosPage),
  ],
  providers: [
    VideosProvider
  ]
})
export class VideosPageModule {}
