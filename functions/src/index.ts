import * as functions from 'firebase-functions';
import { Anniversaries } from './anniversaries';

export const todaysAnniversaries = functions.https.onRequest((request, response) => {
  const anniversaries = new Anniversaries();
  anniversaries.perform();
  response.send("Hello from Firebase!");
});
