import { Contact } from "@models/contact.interface";

export interface Message {
  author: Contact,
  description: string,
  itemDetails: {
    title: string,
    id: string
  }
  media: [
    {
      url: string
    }
  ]
}