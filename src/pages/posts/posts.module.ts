import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { PostsPage } from './posts';
import { PostsProvider } from '@providers/posts';

@NgModule({
  declarations: [
    PostsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostsPage),
    TranslateModule.forChild(),
  ],
  providers: [
    PostsProvider
  ],
  entryComponents: [
  	PostsPage
  ]
})
export class PostsPageModule {}
