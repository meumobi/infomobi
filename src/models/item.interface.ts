export interface Item {  
  _id: string,
  images?: Array<any>,
  medias: Array<any>,
  parent_id: number,
  pubdate?: number,
  thumbnails?: Array<any>,
  title: string,
  type: string,
  groups: Array<any>,
  is_published?: boolean,
  created: number,
  modified: number,
  published: number,
  notification_id: string,
  order: number,
  site_id: number
}

export interface Articles extends Item {
  author: string,
  description: string,
  guid?: string,
  link?: string,
  format?: string,
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