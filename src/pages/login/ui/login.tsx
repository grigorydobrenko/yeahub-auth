import { LoginForm } from '@/features/login';
import { ChangeAuthPage } from '@/widgets/change-auth-page';

export const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <ChangeAuthPage currentPage={'login'} />
    </>
  );
};
