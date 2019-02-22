import { UserProfile } from '@models/contact-profile';

export interface Message {
  author: UserProfile;
  description: string;
  itemDetails: {
    title: string,
    id: string
  };
  media: [
    {
      url: string
    }
  ];
}
