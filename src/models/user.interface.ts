export interface User {
  $key?: string; 
  displayName: string;
  firstName?: string;
  lastName?: string;
  password: string;
  editor_id: string;
  createdAt: Object;
  email: string;
  cellNumber?: string;
  landlineNumber?: string;
  preferredLanguage?: string;
  role: string;
}
