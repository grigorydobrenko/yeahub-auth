import { Typography } from '@/shared/ui-kit';
import s from './auth-layout.module.scss';
import { Outlet } from 'react-router';
import CheckCircle from '@/shared/assets/check-circle.svg?react';
import { MainLogo } from '@/widgets/logo';

export const AuthLayout = () => {
  return (
    <div className={s.layout}>
      <div className={s.sidebar}>
        <MainLogo theme={'inverted'} />
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
      <>
        <MainLogo className={s.resetDesktop} theme={'primary'} />
        <div className={s.container}>
          <Outlet />
        </div>
      </>
    </div>
  );
};
