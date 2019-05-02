import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvPage } from './tv';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [
    TvPage,
  ],
  imports: [
    IonicPageModule.forChild(TvPage),
    LottieAnimationViewModule.forRoot(),
  ],
})
export class Tv2PageModule {}
