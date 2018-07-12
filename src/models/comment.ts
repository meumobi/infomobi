import * as firebase from 'firebase';

export class Comment {  
  _id?: string;
  channel: string;
  type: string;
  data?: Object; 
  created: any;
  published: any;
  modified: any;
  isPublished: boolean;
  site_id: number;

  constructor(type: string) {
    this.type = type;
    this.channel = "live";
    this.created = firebase.firestore.FieldValue.serverTimestamp();
    this.published = this.created;
    this.modified = this.created;
    this.data = new Object();
  }
}