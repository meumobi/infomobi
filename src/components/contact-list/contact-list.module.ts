import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { ContactListComponent } from '@components/contact-list/contact-list';
import { DeskProfileComponent, UserProfileComponent } from '@components/contact-details';

@NgModule({
	declarations: [
    ContactListComponent,
    DeskProfileComponent,
    UserProfileComponent,
	],
	imports: [
		IonicModule,
		TranslateModule.forChild(),
		SharedModule
	],
	exports: [
    ContactListComponent,
    DeskProfileComponent,
    UserProfileComponent,
		IonicModule
	],
	entryComponents: [
    DeskProfileComponent,
    UserProfileComponent,
	]
})
export class ContactListModule {}