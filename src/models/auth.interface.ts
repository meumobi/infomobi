export interface Auth {
  success: boolean,
  token: string,
  message?: string,
  visitor: Object,
}