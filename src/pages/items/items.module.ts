import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemsPage } from './items';
import { ItemsModule } from '@components/items/items.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { ItemsService } from '@providers/items';

@NgModule({
  declarations: [
    ItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemsPage),
    ItemsModule,
    TranslateModule,
    SharedModule,
  ],
  providers: [
    ItemsService,
  ],
  entryComponents: [
    ItemsPage
  ]
})
export class ItemsPageModule {}
