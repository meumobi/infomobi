import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnBoardingPage } from './on-boarding';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OnBoardingPage,
  ],
  imports: [
    IonicPageModule.forChild(OnBoardingPage),
    TranslateModule.forChild(),
  ],
})
export class OnBoardingPageModule {}
