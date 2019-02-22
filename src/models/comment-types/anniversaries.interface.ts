import { UserProfile } from '@models/contact-profile';

export interface Anniversaries {
  picture: string;
  title: string;
  media: [
    {
      url: string
    }
  ];
  contacts: Array<UserProfile>;
}
