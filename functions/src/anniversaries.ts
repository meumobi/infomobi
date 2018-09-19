export class AnniversariesService {
  admin;
  constructor(
    admin
  ) {
    this.admin = admin;
  }

  private getCurrentDate():string {
    const today = new Date().toISOString().slice(5,10);
    console.log("Current date: " + today);
    
    return today;
  }

  private getContacts() {
    const contacts: Array<Object> = [];
    return this.admin.firestore().collection('contacts')
    .get()
    .then(
      data => {
        data.forEach(
          doc => {
            console.log(doc.data());
            const contact = doc.data();
            contacts.push(contact);
          }
        );
        return contacts;
      }
    );
  }

  private publishAnniversaries(contacts) {
    const anniversaries = {
      title: "Aniversariante(s) do dia!",
      picture: "https://infomobi.page.link/uGeF",
      media: [{
        url: "https://infomobi.page.link/sqMF" 
      }],
      contacts: contacts
    }
    const comment = {
      channel: "live",
      type: "anniversaries",
      created: Date.now(),
      published: Date.now(),
      modified: Date.now(),
      isPublished: true,
      data: anniversaries
    }
    return this.admin.firestore().collection('comments')
    .add(comment)
    .then(
      data => {
        return comment
      }
    );
  }

  public filterAnniversaries(contacts, currentDate) {
    return contacts.filter(
      (contact) => {
        if (contact.birthdate) {
          return (contact.birthdate.slice(5,10) === currentDate);
        } else {
          return false;
        }
      }
    )
  }

  public perform() {
    const currentDate = this.getCurrentDate();
    return this.getContacts()
    .then(
      data => {
        const anniversaries = this.filterAnniversaries(data, currentDate);
        if (anniversaries.length > 0) {
          return this.publishAnniversaries(anniversaries);
        } else {
          return {};
        }
      });
  }
}