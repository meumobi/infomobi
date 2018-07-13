import { Contact } from "@models/contact.interface";

export interface Message {
  author: Contact,
  description: string,
  postDetails: {
    title: string,
    id: string
  }
  media: [
    {
      url: string
    }
  ]
}