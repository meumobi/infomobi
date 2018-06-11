import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HomePage } from './home';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SuperTabsModule.forRoot(),
    TranslateModule.forChild()
  ],
})
export class HomePageModule {}