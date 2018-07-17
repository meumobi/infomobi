import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { AnniversariesService } from './anniversaries';
admin.initializeApp();

export const todaysAnniversaries = functions.https.onRequest((request, response) => {
  const anniversariesService: AnniversariesService = new AnniversariesService(admin);
  anniversariesService.perform()
  .then(data => response.send(data));
});
