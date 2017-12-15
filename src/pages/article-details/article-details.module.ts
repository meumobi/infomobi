import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticleDetailsPage } from './article-details';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    ArticleDetailsPage,
  ],
  imports: [
  	MomentModule,	
    IonicPageModule.forChild(ArticleDetailsPage),
  ],
})
export class ArticleDetailsPageModule {}
