import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserProvider from './providers/user.tsx';
import { Login } from './pages/login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<UserProvider />}>
      <Route element={<Dashboard />} path="/" />
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
