export class ContactProfile {  
  _id?: string;
  type: string;
  picture: string;
  displayName: string;
  title: string;
  created: number;
  published: number;
  modified: number;
  isPublished: boolean;
  domain: string;
  
  constructor(type: string) {
    this.type = type;
    this.created = Date.now();
    this.published = Date.now();
    this.modified = Date.now();
  }
}

export class UserProfile extends ContactProfile {
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string;
  options: Object;
  
  constructor() {
    super('user');
    this.options = {};
  }
}

export class DeskProfile extends ContactProfile {
  options: Object;
  
  constructor() {
    super('desk');
    this.options = {};
  }
}