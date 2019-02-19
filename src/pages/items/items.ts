import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from '@models/categories.interface';
import { Item } from '@models/item.interface';
import { ItemsService } from '@providers/items';
import { CategoriesService } from '@providers/categories';

@IonicPage({
  // segment: 'category/:id'
})
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage implements OnInit {
  categoryId: number;
  category: Category;
  rootNavCtrl: NavController;
  items: Array<Item>;

  constructor(
    private itemsService: ItemsService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoriesService: CategoriesService,
    private storage: Storage
  ) {
    this.categoryId = navParams.data.id;
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }

  ngOnInit() {
    if (this.categoryId) {
      this.categoriesService.findById(this.categoryId)
      .then(
        data => this.category = data
      );
    }

    this.fetchItems();
  }

  fetchItems(refresher = null) {
    if (this.categoryId) {
      this.itemsService.fetchByCategory(this.categoryId)
      .then(
        data => {
          this.items = data;
          this.storage.remove('polls');
          if (refresher) {
            refresher.complete();
          }
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      );
    } else {
      this.itemsService.fetchAll()
      .then(
        data => {
          this.items = data;
          this.storage.remove('polls');
          if (refresher) {
            refresher.complete();
          }
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      );
    }
  }

  pushDetailsPage(page: string, id: string) {
    this.rootNavCtrl.push(page, {
      id: id,
      rootNavCtrl: this.rootNavCtrl
    });
  }
}
