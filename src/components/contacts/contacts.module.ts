import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { ContactListComponent } from './contact-list/contact-list';
import { ContactHeadlineComponent } from './contact-headline/contact-headline';
// import { DeskProfileComponent, UserProfileComponent } from '@components/contact-details';

@NgModule({
	declarations: [
		ContactListComponent,
		ContactHeadlineComponent
	],
	imports: [
		IonicModule,
		TranslateModule.forChild(),
		SharedModule
	],
	exports: [
		ContactListComponent,
		ContactHeadlineComponent,
		IonicModule
	],
	entryComponents: [
	]
})
export class ContactsModule {}