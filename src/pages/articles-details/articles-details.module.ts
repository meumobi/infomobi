import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlesDetailsPage } from './articles-details';

@NgModule({
  declarations: [
    ArticlesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticlesDetailsPage),
  ],
})
export class ArticlesDetailsPageModule {}
