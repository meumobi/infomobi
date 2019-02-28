import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosPage } from './videos';
import { SharedModule } from '@shared/shared.module';
import { CommentsModule } from '@components/comments/comments.module';
import { TranslateModule } from '@ngx-translate/core';
import { EmbedVideoService } from '@providers/videos/embed-video.service';
import { YoutubeService } from '@meumobi/ngx-youtube-provider';

@NgModule({
  declarations: [
    VideosPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(VideosPage),
    TranslateModule,
    CommentsModule,
  ],
  providers: [
    YoutubeService,
    EmbedVideoService
  ]
})
export class VideosPageModule {}
