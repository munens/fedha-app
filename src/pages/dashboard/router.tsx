import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AccountFlow, Dashboard } from './components';

const Router = () => (
  <Routes>
    <Route element={<Dashboard />} path="/" />
    <Route element={<AccountFlow />} path="/account-flow" />
  </Routes>
);

export default Router;
