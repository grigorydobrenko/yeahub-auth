import { Button } from '@/shared/ui-kit';
import { useLazyLogoutQuery } from '../api/logout';
import { useAuth } from '@/app/providers/auth-provider.tsx';

export const Logout = () => {
  const [triggerLogout, { isLoading }] = useLazyLogoutQuery();
  const { setToken } = useAuth();
  const handleClick = async () => {
    await triggerLogout();
    setToken(null);
  };

  return (
    <Button onClick={handleClick} disabled={isLoading}>
      Выход
    </Button>
  );
};
