export interface Post {

  _id: string,
  author: string,
  description: string,
  images?: Array<any>,
  link: string,
  medias: Array<any>,
  parent_id: number,
  pubdate?: number,
  thumbnails?: Array<any>,
  title: string,
  type: string,

  /*
    TODO: check if following fields could be removed
  */
  created: number,
  format?: string,
  groups: Array<any>,
  guid: string,
  is_published?: boolean,
  modified: number,
  notification_id: string,
  order: number,
  published: number,
  site_id: number
}