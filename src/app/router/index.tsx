import { createBrowserRouter } from 'react-router';
import { GreetingPage } from '@/pages/greeting';
import { LoginPage } from '@/pages/login';
import { RegistrationPage } from '@/pages/registration';
import { AuthLayout } from '@/widgets/auth-layout/ui/auth-layout.tsx';
import { routes } from '@/shared/const/router.ts';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <GreetingPage />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: routes.login,
        element: <LoginPage />,
      },
      {
        path: routes.registration,
        element: <RegistrationPage />,
      },
    ],
  },
]);
