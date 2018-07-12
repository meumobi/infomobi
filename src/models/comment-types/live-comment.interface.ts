export interface LiveComment {
  author: { 
    picture: string
    displayName: string,
    id: string
  }
  description: string,
  link?: string,
  media: [
    {
      url: string
    }
  ]
}
