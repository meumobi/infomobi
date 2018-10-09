import { NgModule } from '@angular/core';
import { ImgAvatarComponent } from './img-avatar/img-avatar';
import { IonicModule } from 'ionic-angular';
import { ImgCommentComponent } from '@components/images/img-comment/img-comment';
import { SharedModule } from '@shared/shared.module';
@NgModule({
	declarations: [
		ImgAvatarComponent,
		ImgCommentComponent
	],
	imports: [
		IonicModule,
		SharedModule
	],
	exports: [
		IonicModule,
		ImgAvatarComponent,
		ImgCommentComponent
	]
})
export class ImagesModule {}
