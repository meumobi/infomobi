import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreamingPage } from './streaming';

@NgModule({
  declarations: [
    StreamingPage,
  ],
  imports: [
    IonicPageModule.forChild(StreamingPage),
  ],
})
export class StreamingPageModule {}
