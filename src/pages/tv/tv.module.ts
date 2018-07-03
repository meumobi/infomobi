import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvPage } from './tv';
import { SharedModule } from '@shared/shared.module';
import { PostsProvider } from '@providers/posts';
import { CommentsModule } from '@components/comments/comments.module';


@NgModule({
  declarations: [
    TvPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(TvPage),
    CommentsModule
  ],
  providers: [
    PostsProvider
  ]
})
export class TvPageModule {}
