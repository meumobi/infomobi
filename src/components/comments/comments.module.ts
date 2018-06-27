import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments';
import { CommentListComponent } from './comment-list/comment-list';
import { CommentDetailsComponent } from './comment-details/comment-details';
import { CommentFormComponent } from './comment-form/comment-form';
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
