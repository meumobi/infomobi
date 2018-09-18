import { Contact } from "@models/contact.interface";

export interface Anniversaries {  
  picture: string,
  title: string,
  media: [
    {
      url: string
    }
  ]
  contacts: Array<Contact>
}
