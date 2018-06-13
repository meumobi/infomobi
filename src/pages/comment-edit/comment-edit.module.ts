import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentEditPage } from './comment-edit';
import { TranslateModule } from '@ngx-translate/core';
import { FileUploadComponent } from '@components/file-upload/file-upload';

@NgModule({
  declarations: [
    CommentEditPage,
    FileUploadComponent
  ],
  imports: [
    IonicPageModule.forChild(CommentEditPage),
    TranslateModule.forChild()
  ],
})
export class CommentEditPageModule {}
