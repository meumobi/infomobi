import { Contact } from '@models/contact.interface';

export interface Comment {  
    _id?: string,
    author: Contact,
    description: string,
    media?: string,
    published: boolean, 
    postId?: string, 
    link?: string,
    postTitle?: string, 
    createdAt?: Object,
    priority?: number
}
