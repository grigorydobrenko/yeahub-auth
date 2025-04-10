import { Button, Typography } from '@/shared/ui-kit';
import s from './auth-layout.module.scss';
import { Outlet, useNavigate } from 'react-router';
import Logo from '@/shared/assets/logo.svg?react';
import CheckCircle from '@/shared/assets/check-circle.svg?react';
export const AuthLayout = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className={s.layout}>
      <div className={s.sidebar}>
        <Button className={s.logo} variant={'link'} onClick={handleLogoClick}>
          <Logo />
        </Button>
        <Typography variant={'body3'} color={'secondary'}>
          YeaHub объединяет IT-специалистов
        </Typography>
        <Typography className={s.listTitle} variant={'body6'} color={'secondary'}>
          Стань частью сообщества YeaHub и получи:
        </Typography>
        <ul className={s.list}>
          <li>
            <CheckCircle />
            <Typography variant={'body3'} color={'secondary'}>
              Пошаговый план обучения
            </Typography>
          </li>
          <li>
            <CheckCircle />
            <Typography variant={'body3'} color={'secondary'}>
              Карьерный рост
            </Typography>
          </li>
          <li>
            <CheckCircle />
            <Typography variant={'body3'} color={'secondary'}>
              Большое сообщество специалистов
            </Typography>
          </li>
          <li>
            <CheckCircle />
            <Typography variant={'body3'} color={'secondary'}>
              Обучение c ментором
            </Typography>
          </li>
          <li>
            <CheckCircle />
            <Typography variant={'body3'} color={'secondary'}>
              Возможность прохождения стажировки
            </Typography>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
