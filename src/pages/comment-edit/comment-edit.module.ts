import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentEditPage } from './comment-edit';
import { TranslateModule } from '@ngx-translate/core';
import { CommentsModule } from '@components/comments.module';

@NgModule({
  declarations: [
    CommentEditPage
  ],
  imports: [
    IonicPageModule.forChild(CommentEditPage),
    CommentsModule,
    TranslateModule.forChild()
  ],
})
export class CommentEditPageModule {}
