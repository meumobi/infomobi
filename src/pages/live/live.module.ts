import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivePage } from './live';
import { SharedModule } from '@shared/shared.module';
import { CommentsModule } from '@components/comments/comments.module';

@NgModule({
  declarations: [
    LivePage,
  ],
  imports: [
    IonicPageModule.forChild(LivePage),
    CommentsModule,
    SharedModule
  ]
})
export class LivePageModule {}
