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
    this.published = firebase.firestore.FieldValue.serverTimestamp();
    this.modified = firebase.firestore.FieldValue.serverTimestamp();
    this.isPublished = true;
    this.data = new Object();
  }
}