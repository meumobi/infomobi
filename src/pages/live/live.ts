import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
})
export class LivePage {
  @ViewChild('comments') comments;

  constructor(
    public rootNavCtrl: NavController, 
    public navParams: NavParams,
  ) {    
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LivePage');
  } 
  
}

