import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { ContactDetailsPage } from './contact-details';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ContactDetailsPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ContactDetailsPage),
    TranslateModule.forChild()
  ],
})
export class ContactDetailsPageModule {}
