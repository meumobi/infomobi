"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.todaysAnniversaries = functions.https.onRequest((request, response) => {
    const contacts = [];
    admin.firestore().collection('contacts')
        .where('birthday', '==', "16/07/2018")
        .get()
        .then(data => {
        data.forEach(doc => {
            contacts.push(doc.data());
        });
        const anniversaries = {
            title: "Parabéns aos envolvidos",
            picture: "http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg",
            contacts: contacts
        };
        const comment = {
            channel: "live",
            type: "Anniversaries",
            created: Date.now(),
            published: Date.now(),
            modified: Date.now(),
            isPublished: true,
            data: anniversaries
        };
        admin.firestore().collection('comments')
            .add(comment)
            .then(data2 => {
            console.log(data2);
            console.log(comment);
            response.send(comment);
        });
    });
});
//# sourceMappingURL=index.js.map