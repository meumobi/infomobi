import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments';
import { CommentListComponent } from './comment-list/comment-list';
import { CommentDetailsComponent } from './comment-details/comment-details';
import { CommentFormComponent } from './comment-form/comment-form';
import { FileUploadComponent } from '@components/file-upload/file-upload';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { CommentAnniversariesComponent } from '@components/comments/comment-anniversaries/comment-anniversaries';

@NgModule({
	declarations: [
		CommentsComponent,
		CommentListComponent,
		CommentDetailsComponent,
		CommentFormComponent,
		CommentAnniversariesComponent,
		FileUploadComponent
	],
	imports: [
		IonicModule,
		TranslateModule.forChild(),
		SharedModule
	],
	exports: [
		CommentsComponent,
		CommentListComponent,
		CommentDetailsComponent,
		CommentAnniversariesComponent,
		CommentFormComponent,
		FileUploadComponent,
		IonicModule
	]
})
export class CommentsModule {}