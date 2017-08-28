import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Video } from '../../models/video.interface';
import { VideosProvider } from '../../providers/videos';

@IonicPage({
  name: 'videos',
  segment: 'videos'
})
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  videos: Array<Video>;

  constructor(
    private data: VideosProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.findAll();
  }

  findAll() {
    this.data.findAll()
      .then(data => this.videos = data)
      .catch(error => alert(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

}
