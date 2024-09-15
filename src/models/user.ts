export interface IUser {
  readonly id: number;
  readonly username: string;
  readonly password: string;
  readonly lastLoginAt: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
