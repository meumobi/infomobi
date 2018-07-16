export class Comment {  
  _id?: string;
  channel: string;
  type: string;
  data?: Object; 
  created: number;
  published: number;
  modified: number;
  isPublished: boolean;
  site_id: number;

  constructor(type: string) {
    this.type = type;
    this.channel = "live";
    this.created = Date.now();
    this.published = Date.now();
    this.modified = Date.now();
    this.isPublished = true;
    this.data = new Object();
  }
}