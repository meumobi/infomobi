import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '@shared/shared.module';
import { VideoDetailsPage } from './video-details';
import { EmbedVideo } from 'ngx-embed-video';

@NgModule({
  declarations: [
    VideoDetailsPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(VideoDetailsPage),
    EmbedVideo,
  ],
})
export class VideoDetailsPageModule {}
