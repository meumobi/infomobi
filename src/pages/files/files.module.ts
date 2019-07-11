import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilesPage } from './files';
import { TranslateModule } from '@ngx-translate/core';
import { MediaService } from '@meumobi/mmb-media-provider';
import { SocialSharingServiceProvider } from '@providers/social-sharing';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SharedModule } from '@shared/shared.module';
import { NgMathPipesModule } from 'angular-pipes';
import { MediaListModule } from '@components/media-list/media-list.module';
import { GetLargerThumbnailUrlPipe } from '@pipes/get-larger-thumbnail-url.pipe';

@NgModule({
  declarations: [
    FilesPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(FilesPage),
    TranslateModule.forChild(),
    MediaListModule,
  ],
  providers: [
    MediaService,
    SocialSharingServiceProvider,
    SocialSharing,
    NgMathPipesModule,
    GetLargerThumbnailUrlPipe,
  ]
})
export class FilesPageModule {}
