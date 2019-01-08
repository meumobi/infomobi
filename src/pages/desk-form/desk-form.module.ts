import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeskFormPage } from './desk-form';
import { TranslateModule } from '@ngx-translate/core';
import { CommentsModule } from '@components/comments/comments.module';
import { SharedModule } from '@shared/shared.module';
import { ContactsService } from '@providers/contacts';
import { ImagesModule } from '@components/images/images.module';

@NgModule({
  declarations: [
    DeskFormPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(DeskFormPage),
    CommentsModule,
    ImagesModule,
    TranslateModule.forChild()
  ],
  providers: [
    ContactsService
  ]
})
export class DeskFormPageModule {}

