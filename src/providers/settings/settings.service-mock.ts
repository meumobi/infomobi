import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from '@models/settings';
import { Observable } from 'rxjs';

@Injectable()
export class SettingsService {

  settings = Observable.of({
    domain: 'meumobibox.meumobi.com',
    youtubeChannelId: 'UCRGoQtYFZCkbBegdlv8xWew',
    primaryColor: '#f7ce06',
    textColor: '#f4f4f4'
  });


  constructor(public http: HttpClient) {
    console.log('Hello SettingsService Provider');
  }

  public loadByDomain(domain: string): void {
    return;
  }

  public setSettings(settings: Settings): Promise<void> {
    return Promise.resolve();
  }

  public getSettings(): Observable<Settings>  {

    return this.settings.delay(2000);
  }

}
