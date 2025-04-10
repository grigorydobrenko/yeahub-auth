
import { Button, Typography } from '@/shared/ui-kit';
import { useNavigate } from 'react-router';
import { routes } from '@/shared/const/router.ts';
import s from './change-auth-page.module.scss';

interface ChangeAuthPageProps {
  currentPage: 'registration' | 'login';
}

export const ChangeAuthPage = ({ currentPage }: ChangeAuthPageProps) => {
  const isRegistrationPage = currentPage === 'registration';

  const question = isRegistrationPage ? 'Уже есть аккаунт' : 'Нет аккаунта?';
  const linkTitle = isRegistrationPage ? 'Войте' : 'Зарегистрироваться';

  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(isRegistrationPage ? routes.login : routes.registration);
  };

  return (
    <div className={s.container}>
      <Typography variant={'body2'}>{question}</Typography>
      <Button className={s.link} variant={'link'} onClick={handleLinkClick}>
        {linkTitle}
      </Button>
    </div>
  );
};
