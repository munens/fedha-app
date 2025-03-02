import { IUser } from './user.ts';

export interface IAuthenticatedUser {
  readonly user: IUser;
  readonly token: string;
}
