import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '@env';

@Injectable()
export class DynamicLinksProvider {

  constructor(public http: HttpClient) {}

  shortLink(link: string): Promise<string> {
    console.log(link);
    const url = `${ENV.dynamicLinks.url}?key=${ENV.firebase.apiKey}`;
    const httpOptions = {
      headers: {
        'Accept':  'application/json',
      }
    };
    const data = {
      "longDynamicLink": `${ENV.dynamicLinks.prefix}?link=${link}`,
      "suffix": {
        "option": "SHORT"
      }
    }    
    return this.http.post<any>(url, data, httpOptions)
    .map(data => data.shortLink)
    .toPromise();    
  }
}
