import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import UserProvider from './providers/user.tsx';
import { DashboardRouter } from './pages/dashboard';
import { Login } from './pages/login';
import TransactionsDashboard from './pages/transactions-dashboard/transactions-dashboard.tsx';
import React from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<UserProvider />}>
        <Route element={<TransactionsDashboard />} path="/transactions" />
        <Route element={<DashboardRouter />} path="/*" />
      </Route>
      <Route element={<Login />} path="/login" />
    </Route>
  )
);

export default router;
