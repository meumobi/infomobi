import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LivePage } from './live';
import { CommentListComponent } from '@components/comment-list/comment-list';
import { CommentDetailsComponent } from '@components/comment-details/comment-details';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LivePage,
    CommentListComponent,
    CommentDetailsComponent
  ],
  imports: [
    IonicPageModule.forChild(LivePage),
    SharedModule,
    TranslateModule.forChild()
  ]
})
export class LivePageModule {}
