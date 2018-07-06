import { Contact } from '@models/contact.interface';

export interface Comment {  
    _id?: string,
    author: any,
    description: string,
    media?: string,
    content?: Anniversaries,
    published: boolean, 
    type?: string,
    postId?: string, 
    link?: string,
    postTitle?: string, 
    createdAt?: Object,
    priority?: number
}

export interface Anniversaries {
    anniversaries: any[]
}