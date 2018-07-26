import { Observable } from 'rxjs/Observable';

let userProfile = Observable.of({
  _id: "1",
  type: "user",
  picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg",
  displayName: "Luiza Bittencourt",
  email: "victor.dias+employee@meumobi.com", 
  firstName: "Victor", 
  id: "1", 
  lastName: "Dias", 
  title: "Senior Broker",
  created: 1530873217115,
  published: 1530873217115,
  modified: 1530873217115,
  isPublished: true,
  domain: "meumobibox.meumobi.com",
  birthday: "07/17",
  role: "admin",
  preferredLanguage: "pt",
  lastLogin: 1530873217115,
  options: {landlineNumber: "23435679"}
})

export default userProfile.delay(2000);