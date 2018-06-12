import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PostDetailsPage } from './post-details';
import { PostsProvider } from '@providers/posts';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    PostDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(PostDetailsPage),
    SharedModule,
    IonicImageViewerModule,
    TranslateModule.forChild()
  ],
  providers: [
    PostsProvider
  ]
})
export class PostDetailsPageModule {}
