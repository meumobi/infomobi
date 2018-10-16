import { NgModule } from '@angular/core';
import { ImgAvatarComponent } from './img-avatar/img-avatar';
import { IonicModule } from 'ionic-angular';
import { ImgContentComponent } from './img-content/img-content';
import { SharedModule } from '@shared/shared.module';
import { ImgThumbnailComponent } from './img-thumbnail/img-thumbnail';
@NgModule({
	declarations: [
		ImgAvatarComponent,
		ImgContentComponent,
		ImgThumbnailComponent,
	],
	imports: [
		IonicModule,
		SharedModule,
	],
	exports: [
		IonicModule,
		ImgAvatarComponent,
		ImgContentComponent,
		ImgThumbnailComponent,
	]
})
export class ImagesModule {}
