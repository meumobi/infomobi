import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideosService } from '@providers/videos';
import { EmbedVideoService } from '@providers/videos/embed-video.service';

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage implements OnInit {

  playlists: Array<any> = [];
  playlist = '';
  videos: Array<any> = [];
  videoFrame: any;
  channelId: string;

  constructor(
    public navCtrl: NavController,
    private videosService: VideosService,
    private embedService: EmbedVideoService,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    this.channelId = this.navParams.data.channelId;

    this.listVideos();
    this.listPlaylists();
  }

  listPlaylists() {
    this.videosService.fetchPlaylists(this.channelId)
    .then(
      data => {
        this.playlists = data;
        console.log(data);
      }
    );
  }

  listVideos() {
    console.log('listing videos');
    this.videosService.fetchVideos(this.channelId, this.playlist)
    .then(
      data => {
        if (data.length > 0) {
          this.videos = data;
          this.openVideo(this.videos[0]);
        }
        console.log(data);
      }
    );
  }

  openVideo(video) {
    this.videoFrame = this.embedService.embed_youtube(video.id.videoId);
  }
}
