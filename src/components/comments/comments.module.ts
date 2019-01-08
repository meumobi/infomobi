import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments';
import { CommentListComponent } from './comment-list/comment-list';
import { CommentDetailsComponent } from './comment-details/comment-details';
import { CommentFormComponent } from './comment-form/comment-form';
import { FileUploadComponent } from '@components/file-upload/file-upload';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { AnniversariesComponent, MessageComponent } from '../comments/comment';
import { ImagesModule } from '@components/images/images.module';

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
		ImagesModule,
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