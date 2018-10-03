import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PollsDetailsPage } from './polls-details';

@NgModule({
  declarations: [
    PollsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PollsDetailsPage),
  ],
})
export class PollsDetailsPageModule {}
