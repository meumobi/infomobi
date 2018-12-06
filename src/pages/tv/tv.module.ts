import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvPage } from './tv';
import { SharedModule } from '@shared/shared.module';
import { CommentsModule } from '@components/comments/comments.module';
import { VideosService } from '@providers/videos';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    TvPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(TvPage),
    TranslateModule,
    CommentsModule
  ],
  providers: [
    VideosService
  ]
})
export class TvPageModule {}
