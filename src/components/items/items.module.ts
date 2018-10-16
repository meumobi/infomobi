import { NgModule } from '@angular/core';
import { ItemHeadlineComponent } from './item-headline/item-headline';
import { ArticlesComponent } from './types/articles/articles';
import { PollsComponent } from './types/polls/polls';
import { ItemsListComponent } from './items-list/items-list';
import { SharedModule } from '@shared/shared.module';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ImagesModule } from '@components/images/images.module';
@NgModule({
  declarations: [
    ItemHeadlineComponent,
    ArticlesComponent,
    PollsComponent,
    ItemsListComponent
  ],
  imports: [
    IonicModule,
    TranslateModule.forChild(),
    ImagesModule,
    SharedModule
  ],
  exports: [
    ItemHeadlineComponent,
    ArticlesComponent,
    PollsComponent,
    ItemsListComponent,
    IonicModule
  ],
  entryComponents: [
    ArticlesComponent,
    PollsComponent,
  ]
})
export class ItemsModule {}