
export class AnniversariesService {
  admin;
  constructor(
    admin
  ) {
    this.admin = admin;
  }

  private getCurrentDate():string {
    return new Date().toISOString().slice(5,10);   
  }

  private getAnniversaries(currentDate) {
    const contacts: Array<Object> = [];
    return this.admin.firestore().collection('contacts')
    .where('birthday','==',currentDate)
    .get()
    .then(
      data => {
        data.forEach(doc => {
          contacts.push( doc.data() )
        });
        return contacts;
      }
    );
  }

  private publishAnniversaries(contacts) {
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
    console.log(comment);
    return this.admin.firestore().collection('comments')
    .add(comment)
    .then(
      data => {
        return comment
      }
    );
  }

  public perform() {
    const currentDate = this.getCurrentDate();
    return this.getAnniversaries(currentDate)
    .then(data => this.publishAnniversaries(data));
  }
}