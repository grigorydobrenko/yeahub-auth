import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router/index.tsx';
import './styles/button-colors.css';
import './styles/main-variables.css';
import './styles/pallete.css';
import './styles/reset.css';
import './styles/theme.css';
import './styles/typography.css';
import { StoreProvider } from './providers/store-provider.tsx';
import { AuthProvider } from '@/app/providers/auth-provider.tsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <AuthProvider>
        <ToastContainer position="bottom-right" />
        <RouterProvider router={router} />
      </AuthProvider>
    </StoreProvider>
  </StrictMode>
);
