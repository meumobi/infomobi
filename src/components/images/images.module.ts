import { NgModule } from '@angular/core';
import { ImgAvatarComponent } from './img-avatar/img-avatar';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ImgAvatarComponent],
	imports: [
		IonicModule
	],
	exports: [
		IonicModule,
		ImgAvatarComponent
	]
})
export class ImagesModule {}
