export interface Comment {  
    _id?: string,
    author: any,
    description: string,
    media?: string,
    published: boolean, 
    postId?: string, 
    postTitle?: string, 
    createdAt?: Object,
    priority?: number
  }