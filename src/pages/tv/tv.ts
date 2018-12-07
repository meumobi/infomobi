import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { VideosService } from '@providers/videos';

@IonicPage()
@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html',
})
export class TvPage {

  playlists: Array<any> = [];
  playlist: string = "";
  videos: Array<any>;

  constructor(
    public navCtrl: NavController,
    private videosService: VideosService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TvPage');
    this.listVideos();
    this.listPlaylists();
  }

  listPlaylists() {
    this.videosService.fetchPlaylists()
    .then(
      data => {
        this.playlists = data;
        console.log(data);
      }
    );
  }

  listVideos() {
    console.log("listing videos");
    this.videosService.fetchVideos(this.playlist)
    .then(
      data => {
        this.videos = data;
        console.log(data);
      }
    );
  }

  openVideo(video){
    this.navCtrl.push('VideoDetailsPage', {
      video: video
    });
  }

 
}

