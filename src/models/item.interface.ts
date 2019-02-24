export interface Item {
  _id: string;
  order: number;
  created: number;
  modified: number;
  published: number;
  is_published?: boolean;
  thumbnails: Array<any>;
  groups: Array<string>;
  notification_id: string;
  medias: Array<any>;
  title: string;
  type: string;
  site_id: number;
  parent_id: number;
  pubdate: number;
  images: Array<any>;
}

export interface Article extends Item {
  author: string;
  description: string;
  guid: string;
  link: string;
  format: string;
}

export interface Poll extends Item {
  end_date: number;
  multiple_choices: boolean;
  options: Array<string>;
  voted: Vote | null;
  results: Array<Result>;
}

interface Vote {
  user_id: string;
  values: Object;
  timestamp: number;
}

interface Result {
  value: number;
  votes: number;
}
