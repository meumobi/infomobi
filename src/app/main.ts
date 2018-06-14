import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { ENV } from '@env';

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {

    if ('serviceWorker' in navigator && ENV.production) {
      navigator.serviceWorker.register('/ngsw-worker.js');
      console.log('SW registered');
    }
  
  }).catch(error => console.log(error));
