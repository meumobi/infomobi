import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsPage } from './contacts';
import { ContactsProvider } from '@providers/contacts';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ContactsPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ContactsPage),
  ],
  providers: [
    ContactsProvider
  ],
  entryComponents: [
  	ContactsPage
  ]
})
export class ContactsPageModule {}
