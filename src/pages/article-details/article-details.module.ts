import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleDetailsPage } from './article-details';
import { MomentModule } from 'angular2-moment';
import { TranslateModule } from '@ngx-translate/core';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MediaListComponent } from './../../components/media-list/media-list';
import { MediumDetailsComponent } from './../../components/medium-details/medium-details';
import { MediumControlsComponent } from './../../components/medium-controls/medium-controls';
import { NgMathPipesModule } from 'angular-pipes';

@NgModule({
  declarations: [
    ArticleDetailsPage,
    MediaListComponent,
    MediumDetailsComponent,
    MediumControlsComponent
  ],
  imports: [
  	MomentModule,	
    IonicPageModule.forChild(ArticleDetailsPage),
    TranslateModule.forChild(),
    IonicImageViewerModule,
    NgMathPipesModule
  ]
})
export class ArticleDetailsPageModule {}
