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

export interface BirthDate {
  day: number,
  month: number,
  year: number
}

export class UserProfile extends ContactProfile {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  role: string;
  preferredLanguage: string;
  options: Object // options: {landlinePhone: "", mobilePhone: "", skype: ""}

  constructor() {
    super('user');
  }
}

export class DeskProfile extends ContactProfile {
  options: Object // options: {landlinePhone: "", mobilePhone: "", skype: ""}

  constructor() {
    super('desk');
  }
}

[{
  _id: "1",
  type: 'user',
  firstName: "Jennifer",
  lastName: "Wu",
  title: "Senior Broker",
  landlinePhone: "617-244-3672",
  mobilePhone: "617-244-3672",
  email: "jen@ionicrealty.com",
  picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg",
  displayName: "Jenni Wu",
  created: 1531852963067,
  published: 1531852963067,
  modified: 1531852963067,
  isPublished: true,
  domain: "meumobibox.meumobi.com"
}, {

}, {

}]