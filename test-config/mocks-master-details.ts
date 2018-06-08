import { AnalyticsProvider } from '../src/shared/analytics.service';

export class AnalyticsMock extends AnalyticsProvider {
  public startTrackerWithId(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
  
  public trackView(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public trackEvent(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
  
}
