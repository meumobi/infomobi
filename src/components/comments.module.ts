import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments/comments';
import { CommentListComponent } from '@components/comment-list/comment-list';
import { CommentDetailsComponent } from '@components/comment-details/comment-details';
import { CommentFormComponent } from '@components/comment-form/comment-form';
import { FileUploadComponent } from '@components/file-upload/file-upload';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [
		IonicModule,
		TranslateModule.forChild()
	],
	declarations: [
		CommentsComponent,
		CommentListComponent,
		CommentDetailsComponent,
		CommentFormComponent,
		FileUploadComponent
	],
	exports: [
		CommentsComponent,
		CommentListComponent,
		CommentDetailsComponent,
		CommentFormComponent,
		FileUploadComponent,
		IonicModule
	]
})
export class CommentsModule {}
