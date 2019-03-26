import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnBoardingPage } from './on-boarding';
import { TranslateModule } from '@ngx-translate/core';
import { SvgsModule } from '@components/svgs/svgs.module';

@NgModule({
  declarations: [
    OnBoardingPage,
  ],
  imports: [
    IonicPageModule.forChild(OnBoardingPage),
    TranslateModule.forChild(),
    SvgsModule,
  ],
})
export class OnBoardingPageModule {}
