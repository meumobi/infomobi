import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoDetailsPage } from './video-details';
import { EmbedVideo } from 'ngx-embed-video';

@NgModule({
  declarations: [
    VideoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoDetailsPage),
    EmbedVideo,
  ],
})
export class VideoDetailsPageModule {}
