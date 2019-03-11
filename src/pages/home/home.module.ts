import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicImageLoader.forRoot(),
    SharedModule,
    TranslateModule,
    SuperTabsModule,
  ],
})
export class HomePageModule {}
