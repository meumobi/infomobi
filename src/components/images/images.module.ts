import { NgModule } from '@angular/core';
import { ImgAvatarComponent } from './img-avatar/img-avatar';
import { IonicModule } from 'ionic-angular';
import { ImgContentComponent } from '@components/images/img-content/img-content';
import { SharedModule } from '@shared/shared.module';
@NgModule({
	declarations: [
		ImgAvatarComponent,
		ImgContentComponent
	],
	imports: [
		IonicModule,
		SharedModule
	],
	exports: [
		IonicModule,
		ImgAvatarComponent,
		ImgContentComponent
	]
})
export class ImagesModule {}
