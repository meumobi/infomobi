import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Hls from 'hls.js';

@IonicPage()
@Component({
  selector: 'page-streaming',
  templateUrl: 'streaming.html',
})
export class StreamingPage implements AfterViewInit {
  url = '';
  hls: any;
  @ViewChild('player') player: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ngAfterViewInit() {
    this.url = this.navParams.data.url;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(this.url);
      hls.attachMedia(this.player.nativeElement);
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamingPage');
  }

}
