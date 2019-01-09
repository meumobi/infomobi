import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosPage } from './videos';
import { SharedModule } from '@shared/shared.module';
import { CommentsModule } from '@components/comments/comments.module';
import { VideosService } from '@providers/videos';
import { TranslateModule } from '@ngx-translate/core';
import { EmbedVideo } from 'ngx-embed-video';


@NgModule({
  declarations: [
    VideosPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(VideosPage),
    TranslateModule,
    CommentsModule,
    EmbedVideo,
  ],
  providers: [
    VideosService
  ]
})
export class VideosPageModule {}
