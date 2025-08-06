export type ResponseStatus = 'success' | 'fail';

export interface AdminErrorResponse {
  status: ResponseStatus;
  message: string;
}