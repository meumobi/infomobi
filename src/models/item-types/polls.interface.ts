export interface Polls {
  _id: string,
  medias: Array<any>,
  parent_id: number,
  images?: Array<any>,
  thumbnails?: Array<any>,
  title: string,
  type: string,
  created: number,
  groups: Array<any>,
  guid: string,
  is_published?: boolean,
  modified: number,
  order: number,
  published: number,
  site_id: number,
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