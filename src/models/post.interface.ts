export interface Post {  
  _id?: string,
  $key?: string;
  author: any,
  description: string,
  media?: any,
  createdAt?: Object,
  priority?: number
}