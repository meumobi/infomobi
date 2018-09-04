import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '@models/item.interface';
import { ItemsService } from '@providers/items'; 

@IonicPage({
  segment: 'article/details/:id',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-articles-details',
  templateUrl: 'articles-details.html',
})
export class ArticlesDetailsPage {
  @ViewChild('comments') comments; //this is necessary to allow FAB interact with comments component
  id: string;
  articles: Item;
  constructor(
    private itemsService: ItemsService,
    public rootNavCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    console.log(this.navParams);
    this.id = this.navParams.data.id;
    this.findById(this.id);
  }
  
  findById(id) {
    console.log(id);
    this.itemsService.fetchById(id)
      .then(data => {
        console.log(data);
        this.articles = data;
      })
  }
}