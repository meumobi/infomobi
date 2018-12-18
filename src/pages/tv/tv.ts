import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Comment } from '@models/comment';
import { ItemsService } from '@providers/items';
import { Item } from '@models/item.interface';

@IonicPage()
@Component({
  selector: 'tv',
  templateUrl: 'tv.html',
})
export class TvPage {
  items:Item[];
  comments:Comment[];

  constructor(
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

}