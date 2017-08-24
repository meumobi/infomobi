export interface Article {

  _id: string,
  title: string,
  description: string,
  pubdate: number,
  link: string,
  parent_id: number,
  images: Array<any>,
  thumbnails: Array<any>,
  medias: Array<any>,
  type: string,
  author: string,

  /*
    TODO: check if following fields could be removed
  */
  order: number,
  created: number,
  modified: number,
  published: number,
  is_published: boolean,
  notification_id: string,
  guid: string,
  format: string,
  site_id: number
}