import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { PostsPage } from './posts';
import { CategoryLabelModule } from '@components/category-label/category-label.module';
import { SharedModule } from '@shared/shared.module';
import { PostsService } from '@providers/posts';

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
    PostsService
  ],
  entryComponents: [
  	PostsPage
  ]
})
export class PostsPageModule {}
