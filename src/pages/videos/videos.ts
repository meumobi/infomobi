import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { VideosService } from '@providers/videos';
import { EmbedVideoService } from 'ngx-embed-video';

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  playlists: Array<any> = [];
  playlist: string = "";
  videos: Array<any>;
  videoFrame: any;

  constructor(
    public navCtrl: NavController,
    private videosService: VideosService,
    private embedService: EmbedVideoService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
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
        this.openVideo(this.videos[0]);
        console.log(data);
      }
    );
  }

  openVideo(video){
    this.videoFrame = this.embedService.embed_youtube(video.id.videoId);
  }

 
}

