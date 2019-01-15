import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '@shared/shared.module';
import { VideoDetailsPage } from './video-details';
import { EmbedVideoService } from '@providers/videos/embed-video.service';

@NgModule({
  declarations: [
    VideoDetailsPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(VideoDetailsPage),
  ],
  providers: [
    EmbedVideoService
  ]
})
export class VideoDetailsPageModule {}
