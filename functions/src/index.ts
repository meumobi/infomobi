import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

export const todaysAnniversaries = functions.https.onRequest((request, response) => {
  const contacts: Array<Object> = [];
  admin.firestore().collection('contacts')
  .where('birthday','==',"16/07/2018")
  .get()
  .then(
    data => {
      data.forEach(doc => {
        contacts.push( doc.data() )
      });
      const anniversaries = {
        title: "Parabéns aos envolvidos",
        picture: "http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg",
        contacts: contacts
      }
      const comment = {
        channel: "live",
        type: "Anniversaries",
        created: Date.now(),
        published: Date.now(),
        modified: Date.now(),
        isPublished: true,
        data: anniversaries
      }
      admin.firestore().collection('comments')
      .add(comment)
      .then(
        e => {
          console.log(comment);
          response.send(comment);
        }
      );
    }
  );
});
