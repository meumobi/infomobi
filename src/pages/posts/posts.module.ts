import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '@shared/shared.module';
import { PostsPage } from './posts';
import { PostsService } from '@providers/posts';

@NgModule({
  declarations: [
    PostsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostsPage),
    SharedModule
  ],
  providers: [
    PostsService
  ],
  entryComponents: [
  	PostsPage
  ]
})
export class PostsPageModule {}
