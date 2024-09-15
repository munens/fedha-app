import React, { useEffect, useState } from 'react';
import { Panel, TextField, Button } from '../../components';
import useMutateAuthenticateUser from '../../hooks/useMutateAuthenticateUser.ts';
import { useNavigate } from 'react-router-dom';
import storageService from '../../services/storage.ts';
import FEDHA_TOKEN_KEY from '../../constants.ts';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();
  const { authenticateUser, authenticatedUser, isError, isSuccess } =
    useMutateAuthenticateUser();

  const onLoginPress = () =>
    authenticateUser({
      username,
      password
    });

  useEffect(() => {
    if (isSuccess) {
      const { token } = authenticatedUser;

      if (token) {
        storageService.setValueIfNotInStorage(FEDHA_TOKEN_KEY, token);
      }

      navigate('/');
    }
  }, [isSuccess]);

  const onKeyDown = ({ key }: React.KeyboardEvent<HTMLButtonElement>) => {
    if (key !== 'Enter') {
      return;
    }

    onLoginPress();
  };

  return (
    <Panel backgroundColor="bg-black-200" className="w-96">
      <TextField
        label="Username"
        onChange={(v) => setUsername(v)}
        onKeyDown={onKeyDown}
        placeholder="johndoe"
        type="text"
        value={username}
      />
      <TextField
        label="Password"
        onChange={(v) => setPassword(v)}
        onKeyDown={onKeyDown}
        placeholder="***"
        type="password"
        value={password}
      />
      <div className="flex justify-end w-full">
        <Button.Primary onClick={onLoginPress} text="Login" type="button" />
      </div>
    </Panel>
  );
};

export default Login;
