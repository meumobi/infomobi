export interface PostComment {
  author: { 
    picture: string
    displayName: string,
    id: string
  }
  description: string,
  postDetails: {
    title: string,
    id: string
  }
  media: [
    {
      url: string
    }
  ]
}
