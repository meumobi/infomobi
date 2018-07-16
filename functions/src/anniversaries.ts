import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
export class Anniversaries {
  
  private getCurrentDate():string {
    // return new Date().toLocaleDateString("pt-BR");    
    return "07/16/2018";
  }

  private getAnniversaries(currentDate) {
    const teste = admin.firestore().collection('contacts').where('birthday','==',currentDate);
    return teste;
  }

  public perform() {
    const currentDate = this.getCurrentDate();
    const contacts = this.getAnniversaries(currentDate);
    console.log(currentDate);
    console.log(contacts);
  }
}