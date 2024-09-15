import { useEffect, useState } from 'react';
import UserContext from '../contexts/user.ts';
import useUserQuery from '../hooks/useUserQuery.ts';
import { IUser } from '../models/user.ts';
import storageService from '../services/storage.ts';
import FEDHA_TOKEN_KEY from '../constants.ts';
import { Outlet, useNavigate } from 'react-router-dom';

const UserProvider = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();
  const { authenticatedUser, error, isSuccess } = useUserQuery(true);

  useEffect(() => {
    console.log(authenticatedUser);
    if (isSuccess) {
      const { user, token } = authenticatedUser;
      if (user) {
        setUser(user);
      }

      if (token) {
        storageService.setValueIfNotInStorage(FEDHA_TOKEN_KEY, token);
      }
    }
  }, [isSuccess, authenticatedUser]);

  useEffect(() => {
    console.log(error);
    if (error?.status === 403) {
      navigate('/login');
    }
  }, [error]);

  return (
    <UserContext.Provider value={{ user }}>
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserProvider;
