export interface Post {
  
  _id?: string,
  $key?: string;
  author: any,
  description: string,
  picture?: string,
  createdAt?: Object,
  priority?: number
}