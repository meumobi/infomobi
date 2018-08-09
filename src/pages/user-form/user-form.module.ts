import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserFormPage } from './user-form';
import { TranslateModule } from '@ngx-translate/core';
import { CommentsModule } from '@components/comments/comments.module';
import { SharedModule } from '@shared/shared.module';
import { ContactsService } from '@providers/contacts';

@NgModule({
  declarations: [
    UserFormPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(UserFormPage),
    CommentsModule,
    TranslateModule.forChild()
  ],
  providers: [
    ContactsService
  ]
})
export class UserFormPageModule {}
