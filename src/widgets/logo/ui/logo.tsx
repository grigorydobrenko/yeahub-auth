import { Button, Typography } from '@/shared/ui-kit';
import s from './logo.module.scss';
import { useNavigate } from 'react-router';
import { routes } from '@/shared/const/router.ts';
import Logo from '@/shared/assets/logo.svg?react';
import LogoInverted from '@/shared/assets/logo-inverted.svg?react';
import clsx from 'clsx';

type LogoProps = {
  theme: 'primary' | 'inverted';
  className?: string;
};

export const MainLogo = ({ theme = 'primary', className = '' }: LogoProps) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(routes.home);
  };

  const logo =
    theme === 'primary' ? (
      <>
        <Logo />
        <Typography color={'primary'} variant={'head3'} component={'h1'}>
          Yeahub
        </Typography>
      </>
    ) : (
      <>
        <LogoInverted />
        <Typography color={'secondary'} variant={'head3'} component={'h1'}>
          Yeahub
        </Typography>
      </>
    );

  return (
    <Button className={clsx(s.logo, className)} variant={'link'} onClick={handleLogoClick}>
      {logo}
    </Button>
  );
};
