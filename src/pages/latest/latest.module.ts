import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LatestPage } from './latest';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LatestPage,
  ],
  imports: [
  	IonicPageModule.forChild(LatestPage),
    TranslateModule.forChild(),
  ],
  entryComponents: [
  	LatestPage
  ]
})
export class LatestPageModule {}
