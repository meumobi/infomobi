import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentEditPage } from './comment-edit';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CommentEditPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentEditPage),
    TranslateModule.forChild()
  ],
})
export class CommentEditPageModule {}
