import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreferencesPage } from './preferences';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(PreferencesPage),
    TranslateModule.forChild(),
  ],
})
export class PreferencesPageModule {}
