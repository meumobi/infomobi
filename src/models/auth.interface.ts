export interface Auth {
  success: boolean,
  token: string,
  message?: string,
  visitor: User
}

export interface User {
  first_name: string,
  last_name: string,
  email: string,
  site: string
}

export class AuthError {
  message: string
}