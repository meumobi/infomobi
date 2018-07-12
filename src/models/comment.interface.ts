export interface Comment {  
  _id: string,
  type: string
  data: Object, 
  created: number,
  published: number,
  modified: number,
  isPublished: boolean
  site_id: number
}