import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Anniversaries } from './anniversaries';
admin.initializeApp();

export const todaysAnniversaries = functions.https.onRequest((request, response) => {
  const anniversaries: Anniversaries = new Anniversaries(admin);
  anniversaries.perform()
  .then(data => response.send("ok"));
});
