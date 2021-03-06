import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Comment } from '@models/comment';
import { ItemsService } from '@providers/items';
import { Item } from '@models/item.interface';
import { AuthDataPersistenceService } from '@providers/auth-data-persistence';


@IonicPage()
@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html',
})
export class TvPage {
  items: Item[];
  comments: Comment[];

  constructor(
    private authDataPersistenceService: AuthDataPersistenceService,
    private itemsService: ItemsService
  ) {
    this.fetchItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TvPage');
  }

  fetchItems() {
    this.itemsService.fetchAll()
    .then(
      data => {
        this.items = data;
      })
    .catch(
      err => {
        console.log(err);
      }
    );
  }

  ionViewCanEnter(): boolean {
    return this.authDataPersistenceService.isAuthenticated();
  }
}
