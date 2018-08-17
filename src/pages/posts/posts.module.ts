import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { PostsPage } from './posts';
import { PostsProvider } from '@providers/posts';
import { CategoryLabelModule } from '@components/category-label/category-label.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    PostsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostsPage),
    TranslateModule.forChild(),
    CategoryLabelModule,
    SharedModule
  ],
  providers: [
    PostsProvider
  ],
  entryComponents: [
  	PostsPage
  ]
})
export class PostsPageModule {}
