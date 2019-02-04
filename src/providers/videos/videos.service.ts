import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '@env';

@Injectable()
export class VideosService {

  apiKey: string;
  apiURL = '';

  constructor(
    public http: HttpClient,
  ) {
    console.log('Hello VideosService Provider');
    this.apiKey = ENV.youtube.apiKey;
    this.apiURL = ENV.youtube.apiURL;
  }

  async fetchPlaylists(channelId: string) {
    const url = `${this.apiURL}/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&key=${this.apiKey}`;
    return this.http.get(url).toPromise()
    .then(
      data => {
        return data['items'];
      }
    ).catch(
      () => []
    );
  }

  async fetchVideos(channelId: string, playlist: string) {
    let url = `${this.apiURL}/search?key=${this.apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;
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
