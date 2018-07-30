import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PostsPage } from './posts';
import { PostsService } from '@providers/posts';

@NgModule({
  declarations: [
    PostsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostsPage),
  ],
  providers: [
    PostsService
  ],
  entryComponents: [
  	PostsPage
  ]
})
export class PostsPageModule {}
