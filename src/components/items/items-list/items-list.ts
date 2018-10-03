import { Component, Input } from '@angular/core';

@Component({
  selector: 'items-list',
  templateUrl: 'items-list.html'
})
export class ItemsListComponent {
  @Input('items') items;
  fakeItems: Array<any> = new Array(5);
}
