import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ContactDetailsPage } from './contact-details';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ContactDetailsPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ContactDetailsPage),
  ],
})
export class ContactDetailsPageModule {}
