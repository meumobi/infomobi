import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PostDetailsPage } from './post-details';
import { PostsService } from '@providers/posts';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { MediaListComponent } from '@components/media-list/media-list';
import { MediumDetailsComponent } from '@components/medium-details/medium-details';
import { MediumControlsComponent } from '@components/medium-controls/medium-controls';
import { NgMathPipesModule } from 'angular-pipes';
import { CommentsModule } from '@components/comments/comments.module';

@NgModule({
  declarations: [
    PostDetailsPage,
    MediaListComponent,
    MediumDetailsComponent,
    MediumControlsComponent
  ],
  imports: [
    IonicPageModule.forChild(PostDetailsPage),
    SharedModule,
    CommentsModule,
    TranslateModule.forChild()
  ],
  providers: [
    PostsService,
    NgMathPipesModule
  ]
})
export class PostDetailsPageModule {}
