
export class Anniversaries {
  admin;
  constructor(
    admin
  ) {
    this.admin = admin;
  }

  private getCurrentDate():string {
    // return new Date().toLocaleDateString("pt-BR");    
    return "16/07/2018";
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

  private newAnniversaries(contacts) {
    console.log(contacts);
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
    return this.admin.firestore().collection('comments').add(comment)
  }

  public perform() {
    const currentDate = this.getCurrentDate();
    return this.getAnniversaries(currentDate)
    .then(data => this.newAnniversaries(data));
  }
}