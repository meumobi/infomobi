import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PostDetailsPage } from './post-details';
import { PostsProvider } from '@providers/posts';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { MediaListComponent } from '@components/media-list/media-list';
import { MediumDetailsComponent } from '@components/medium-details/medium-details';
import { MediumControlsComponent } from '@components/medium-controls/medium-controls';
import { NgMathPipesModule } from 'angular-pipes';

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
    TranslateModule.forChild()
  ],
  providers: [
    PostsProvider,
    NgMathPipesModule
  ]
})
export class PostDetailsPageModule {}
