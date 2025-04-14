import { createBrowserRouter } from 'react-router';
import { GreetingPage } from '@/pages/greeting';
import { LoginPage } from '@/pages/login';
import { RegistrationPage } from '@/pages/registration';
import { AuthLayout } from '../layouts/auth-layout/ui/auth-layout';
import { routes } from '@/shared/const/router.ts';
import { ProtectedRoute } from '@/app/router/protected-route.tsx';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: (
      <ProtectedRoute>
        <GreetingPage />
      </ProtectedRoute>
    ),
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
