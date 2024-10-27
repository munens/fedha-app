import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserProvider from './providers/user.tsx';
import { Login } from './pages/login';
import { DashboardRouter } from './pages/dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<UserProvider />}>
        <Route element={<DashboardRouter />} path="/*" />
      </Route>
      <Route element={<Login />} path="/login" />
    </Route>
  )
);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
