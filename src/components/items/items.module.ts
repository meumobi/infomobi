import { NgModule } from '@angular/core';
import { ItemHeadlineComponent } from './item-headline/item-headline';
import { ArticlesComponent } from './types/articles/articles';
import { PollsComponent } from './types/polls/polls';
import { ItemsListComponent } from './items-list/items-list';
@NgModule({
	declarations: [ItemHeadlineComponent,
    ArticlesComponent,
    PollsComponent,
    ItemsListComponent],
	imports: [],
	exports: [ItemHeadlineComponent,
    ArticlesComponent,
    PollsComponent,
    ItemsListComponent]
})
export class ItemsModule {}