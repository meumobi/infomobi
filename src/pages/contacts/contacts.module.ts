import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsPage } from './contacts';
import { TranslateModule } from '@ngx-translate/core';
import { ContactsService } from '@providers/contacts';
import { ContactsModule } from '@components/contacts/contacts.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ContactsPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ContactsPage),
    TranslateModule.forChild(),
    ContactsModule
  ],
  providers: [
    ContactsService
  ],
  entryComponents: [
  	ContactsPage
  ]
})
export class ContactsPageModule {}
