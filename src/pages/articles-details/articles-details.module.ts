import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlesDetailsPage } from './articles-details';

import { ItemsService } from '@providers/items';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgMathPipesModule } from 'angular-pipes';
import { CommentsModule } from '@components/comments/comments.module';
import { ItemsModule } from '@components/items/items.module';
import { SocialSharingServiceProvider } from '@providers/social-sharing';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MediaListModule } from '@components/media-list/media-list.module';
import { MediaService } from '@meumobi/mmb-media-provider';
import { GetLargerThumbnailUrlPipe } from '@pipes/get-larger-thumbnail-url.pipe';


@NgModule({
  declarations: [
    ArticlesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticlesDetailsPage),
    SharedModule,
    CommentsModule,
    ItemsModule,
    TranslateModule.forChild(),
    MediaListModule
  ],
  providers: [
    ItemsService,
    NgMathPipesModule,
    SocialSharingServiceProvider,
    SocialSharing,
    GetLargerThumbnailUrlPipe,
    MediaService,
  ]
})
export class ArticlesDetailsPageModule {}
