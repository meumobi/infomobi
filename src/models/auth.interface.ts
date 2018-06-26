export interface Auth {
  success: boolean,
  token: string,
  message?: string,
  visitor: {
    first_name: string,
    last_name: string,
    email: string,
    site: string
  },
}