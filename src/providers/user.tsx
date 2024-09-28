import { useEffect, useState } from 'react';
import UserContext from '../contexts/user.ts';
import useUserQuery from '../hooks/useUserQuery.ts';
import { IUser } from '../models/user.ts';
import { storageService } from '../services/storage';
import FEDHA_TOKEN_KEY from '../constants.ts';
import { Outlet, useNavigate } from 'react-router-dom';

const UserProvider = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const token = storageService.getValueFromStorage(FEDHA_TOKEN_KEY);
  const { authenticatedUser, isLoading, error, isSuccess } = useUserQuery();

  const navigateToLogin = () => navigate('/login');

  useEffect(() => {
    console.log({ token });

    if (!token) {
      navigateToLogin();
    }
  }, [token]);

  useEffect(() => {
    console.log({ authenticatedUser });
    if (isSuccess) {
      const { user } = authenticatedUser;
      if (user) {
        setUser(user);
      }
    }
  }, [isSuccess, authenticatedUser]);

  useEffect(() => {
    console.log({ error });
    if (error?.status === 403) {
      storageService.removeValueFromStorage(FEDHA_TOKEN_KEY);
      navigateToLogin();
    }
  }, [error]);

  return (
    <UserContext.Provider value={{ user }}>
      {isLoading ? <span>loading...</span> : <Outlet />}
    </UserContext.Provider>
  );
};

export default UserProvider;
