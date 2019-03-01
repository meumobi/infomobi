import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreamingPage } from './streaming';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    StreamingPage,
  ],
  imports: [
    IonicPageModule.forChild(StreamingPage),
    TranslateModule.forChild(),
  ],
})
export class StreamingPageModule {}
