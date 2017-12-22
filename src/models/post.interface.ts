export interface Post {  
  _id?: string,
  author: any,
  description: string,
  media?: any,
  published: boolean, 
  articleId?: string, 
  articleTitle?: string, 
  createdAt?: Object,
  priority?: number
}