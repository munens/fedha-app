import { IUser } from '../models/user.ts';
import { createContext } from 'react';

interface IUserContext {
  user: IUser | null;
}

const UserContext = createContext<IUserContext>({});

export default UserContext;
