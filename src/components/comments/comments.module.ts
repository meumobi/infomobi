import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments';
import { CommentListComponent } from './comment-list/comment-list';
import { CommentDetailsComponent } from './comment-details/comment-details';
import { CommentFormComponent } from './comment-form/comment-form';
import { FileUploadComponent } from '@components/file-upload/file-upload';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { AnniversariesComponent } from '../comments/comment-description';
import { MessageComponent } from '..//comments/comment-description';

@NgModule({
	declarations: [
		CommentsComponent,
		CommentListComponent,
		CommentDetailsComponent,
		CommentFormComponent,
		FileUploadComponent,
		AnniversariesComponent,
		MessageComponent
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
		CommentFormComponent,
		FileUploadComponent,
		IonicModule
	],
	entryComponents: [
		MessageComponent,
		AnniversariesComponent
	]
})
export class CommentsModule {}