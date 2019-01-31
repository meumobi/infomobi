import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

export function isProdMode(): boolean {
  return process.env.IONIC_ENV === 'prod';
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {

  if ('serviceWorker' in navigator && isProdMode()) {
    navigator.serviceWorker.register('/OneSignalSDKWorker.js')
      .then(() => console.log('service worker installed'))
      .catch(err => console.error('Error', err));
  }

  if ('serviceWorker' in navigator && !navigator.serviceWorker.controller && isProdMode()) {
    navigator.serviceWorker.register('/ngsw-worker.js');
  }

}).catch(error => console.log(error));
