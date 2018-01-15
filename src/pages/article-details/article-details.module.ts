import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleDetailsPage } from './article-details';
import { MomentModule } from 'angular2-moment';
import { TranslateModule } from '@ngx-translate/core';


import { MediaListComponent } from './../../components/media-list/media-list';
import { MediumDetailsComponent } from './../../components/medium-details/medium-details';

@NgModule({
  declarations: [
    ArticleDetailsPage,
    MediaListComponent,
    MediumDetailsComponent
  ],
  imports: [
  	MomentModule,	
    IonicPageModule.forChild(ArticleDetailsPage),
    TranslateModule.forChild()
  ]
})
export class ArticleDetailsPageModule {}
