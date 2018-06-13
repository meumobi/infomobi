import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PostsPage } from './posts';
import { PostsProvider } from '@providers/posts';

@NgModule({
  declarations: [
    PostsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostsPage),
  ],
  providers: [
    PostsProvider
  ],
  entryComponents: [
  	PostsPage
  ]
})
export class PostsPageModule {}
