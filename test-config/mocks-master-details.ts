import { AnalyticsProvider } from '../src/shared/analytics.service';
import { AuthService } from '../src/providers/auth/auth.service-mock';
import { AuthDataPersistenceService } from '../src/providers/auth-data-presistence/auth-data-persistence.service-mock';

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