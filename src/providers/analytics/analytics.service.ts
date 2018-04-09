import { Injectable } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';


@Injectable()
export class AnalyticsProvider {

  constructor(
    private ga: GoogleAnalytics
  ) {    
  }

  startTrackerWithId(id) {
    return this.ga.startTrackerWithId(id)
    .then(() => {
      console.log('GA is now ready');
    })
    .catch(e => console.log('Error starting GA', e)); 
    ;   
  }

  trackView(screenName) {
    alert(screenName);    
    return this.ga.trackView(screenName);
  }

  trackEvent(category, action, label?, value?) {
    return this.ga.trackEvent(category, action, label, value);
  }

}
