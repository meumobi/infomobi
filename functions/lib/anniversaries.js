"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnniversariesService {
    constructor(admin) {
        this.admin = admin;
    }
    getCurrentDate() {
        return new Date().toISOString().slice(5, 10);
    }
    getAnniversaries(currentDate) {
        const contacts = [];
        return this.admin.firestore().collection('contacts')
            .where('birthday', '==', currentDate)
            .get()
            .then(data => {
            data.forEach(doc => {
                console.log(doc.data());
                const contact = doc.data();
                //contact["id"] = doc.id;
                contacts.push(contact);
            });
            return contacts;
        });
    }
    publishAnniversaries(contacts) {
        const anniversaries = {
            title: "Parabéns aos envolvidos",
            picture: "http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg",
            contacts: contacts
        };
        const comment = {
            channel: "live",
            type: "anniversaries",
            created: Date.now(),
            published: Date.now(),
            modified: Date.now(),
            isPublished: true,
            data: anniversaries
        };
        console.log(comment);
        return this.admin.firestore().collection('comments')
            .add(comment)
            .then(data => {
            return comment;
        });
    }
    perform() {
        const currentDate = this.getCurrentDate();
        return this.getAnniversaries(currentDate)
            .then(data => this.publishAnniversaries(data));
    }
}
exports.AnniversariesService = AnniversariesService;
//# sourceMappingURL=anniversaries.js.map