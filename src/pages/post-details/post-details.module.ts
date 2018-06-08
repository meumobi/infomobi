import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PostDetailsPage } from './post-details';
import { PostsProvider } from '@providers/posts';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    PostDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostDetailsPage),
    SharedModule
  ],
  providers: [
    PostsProvider
  ]
})
export class PostDetailsPageModule {}
