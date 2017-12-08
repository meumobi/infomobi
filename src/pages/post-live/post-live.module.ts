import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { PostLivePage } from './post-live';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PostLivePage,
  ],
  imports: [
    IonicPageModule.forChild(PostLivePage),
    TranslateModule.forChild()
  ],
})
export class PostLivePageModule {}
