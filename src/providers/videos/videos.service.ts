import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '@env';
import { SettingsService } from '@providers/settings';

@Injectable()
export class VideosService {

  apiKey: string;
  channelId: string;
  apiURL = '';

  constructor(
    public http: HttpClient,
    private settingsService: SettingsService,
  ) {
    console.log('Hello VideosService Provider');
    this.apiKey = ENV.youtube.apiKey;
    this.apiURL = ENV.youtube.apiURL;
    this.settingsService.getSettings().subscribe(
      data => {
        this.channelId = data.youtubeChannelId;
      }
    );
  }

  async fetchPlaylists() {
    const url = `${this.apiURL}/playlists?part=snippet%2CcontentDetails&channelId=${this.channelId}&key=${this.apiKey}`;
    return this.http.get(url).toPromise()
    .then(
      data => {
        return data['items'];
      }
    ).catch(
      () => []
    );
  }

  async fetchVideos(playlist: string) {
    let url = `${this.apiURL}/search?key=${this.apiKey}&channelId=${this.channelId}&part=snippet,id&order=date&maxResults=20`;
    if (playlist !== '') {
      url = `${this.apiURL}/playlistItems?key=${this.apiKey}&playlistId=${playlist}&part=snippet,id&order=date&maxResults=20`;
    }
    return this.http.get(url).toPromise()
    .then(
      data => {
        return data['items'];
      }
    ).catch(
      () => []
    );
  }

}
