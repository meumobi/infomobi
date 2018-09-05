import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '@models/item.interface';

@IonicPage({
	name: 'comment-edit'
})
@Component({
  selector: 'page-comment-edit',
  templateUrl: 'comment-edit.html',
})
export class CommentEditPage {

  item: Item;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {  
    this.item = this.navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentEditPage');
  }

}
