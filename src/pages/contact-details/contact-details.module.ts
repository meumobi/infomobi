import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDetailsPage } from './contact-details';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { ContactsProvider } from '@providers/contacts';


@NgModule({
  declarations: [
    ContactDetailsPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ContactDetailsPage),
    TranslateModule.forChild()
  ],
  providers: [
    ContactsProvider
  ]
})
export class ContactDetailsPageModule {}
