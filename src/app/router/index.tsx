import { createBrowserRouter } from 'react-router';
import { GreetingPage } from '@/pages/greeting';
import { LoginPage } from '@/pages/login';
import { RegistrationPage } from '@/pages/registration';
import { AuthLayout } from '@/widgets/auth-layout/ui/auth-layout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GreetingPage />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/registration',
        element: <RegistrationPage />,
      },
    ],
  },
]);
