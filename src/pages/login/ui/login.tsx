import { LoginForm } from '@/features/login';
import s from './login.module.scss';
import { ChangeAuthPage } from '@/widgets/change-auth-page';

export const LoginPage = () => {
  return (
    <div className={s.container}>
      <LoginForm />
      <ChangeAuthPage currentPage={'login'} />
    </div>
  );
};
