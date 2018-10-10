import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { ContactListComponent } from './contact-list/contact-list';
import { ContactHeadlineComponent } from './contact-headline/contact-headline';
import { DeskComponent } from './types/desk/desk';
import { UserComponent } from './types/user/user';
import { ImagesModule } from '@components/images/images.module';

@NgModule({
	declarations: [
		ContactListComponent,
		ContactHeadlineComponent,
		DeskComponent,
		UserComponent,
	],
	imports: [
		IonicModule,
		TranslateModule.forChild(),
		ImagesModule,
		SharedModule
	],
	exports: [
		ContactListComponent,
		ContactHeadlineComponent,
		IonicModule,
	],
	entryComponents: [
		DeskComponent,
		UserComponent,
	]
})
export class ContactsModule {}