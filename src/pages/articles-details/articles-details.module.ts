import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlesDetailsPage } from './articles-details';

import { ItemsService } from '@providers/items';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { MediaListComponent } from '@components/media-list/media-list';
import { MediumDetailsComponent } from '@components/medium-details/medium-details';
import { MediumControlsComponent } from '@components/medium-controls/medium-controls';
import { NgMathPipesModule } from 'angular-pipes';
import { CommentsModule } from '@components/comments/comments.module';
import { ItemsModule } from '@components/items/items.module';

@NgModule({
  declarations: [
    ArticlesDetailsPage,
    MediaListComponent,
    MediumDetailsComponent,
    MediumControlsComponent
  ],
  imports: [
    IonicPageModule.forChild(ArticlesDetailsPage),
    SharedModule,
    CommentsModule,
    ItemsModule,
    TranslateModule.forChild(),
  ],
  providers: [
    ItemsService,
    NgMathPipesModule
  ]
})
export class ArticlesDetailsPageModule {}