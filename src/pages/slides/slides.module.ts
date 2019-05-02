import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidesPage } from './slides';
import { SharedModule } from '@shared/shared.module';
import { ItemsService } from '@providers/items';
import { CommentsModule } from '@components/comments/comments.module';


@NgModule({
  declarations: [
    SlidesPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(SlidesPage),
    CommentsModule
  ],
  providers: [
    ItemsService
  ]
})
export class SlidesPageModule {}
