import { routes } from '@/shared/const/router.ts';
import { useAuth } from '@/app/providers/auth-provider.tsx';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to={routes.login} replace state={{ from: location }} />;
  }

  return children;
};
