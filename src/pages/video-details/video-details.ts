import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmbedVideoService } from '@providers/videos/embed-video.service';

@IonicPage()
@Component({
  selector: 'page-video-details',
  templateUrl: 'video-details.html',
})
export class VideoDetailsPage {
  video: any;
  rootNavCtrl: NavController;
  videoFrame: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private embedService: EmbedVideoService,
  ) {
    this.video = this.navParams.data.video;
    this.videoFrame = this.embedService.embed_youtube(this.video.id.videoId);
    console.log(this.videoFrame);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoDetailsPage');
  }

}
