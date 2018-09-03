export interface Item {  
  _id: string,

  images?: Array<any>,
  link: string,
  medias: Array<any>,
  parent_id: number,
  pubdate?: number,
  thumbnails?: Array<any>,
  title: string,
  type: string,
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

export interface Articles extends Item {
  author: string,
  description: string,
}

export interface Polls extends Item {
  end_date: number,
  multiple_choices: boolean,
  options: Array<string>,
  results: Array<Vote>
}

interface Vote {
  user_id: string,
  values: Object,
  timestamp: number
}