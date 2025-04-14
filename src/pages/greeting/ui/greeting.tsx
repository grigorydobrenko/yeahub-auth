import { selectUser, useGetProfileQuery } from '@/entities/user';
import { useAppSelector } from '@/shared/types/store.ts';
import { Typography } from '@/shared/ui-kit';
import { Logout } from '@/features/logout';
import s from './greeting.module.scss';
import { MainLogo } from '@/widgets/logo';

export const GreetingPage = () => {
  const userName = useAppSelector(selectUser);

  const { data: userProfile } = useGetProfileQuery(undefined, { skip: !!userName });

  const displayName = userName || userProfile?.username || '';

  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <MainLogo theme={'primary'} />
        <Logout />
      </div>
      {displayName && <Typography variant={'head1'}>Привет, {displayName} !</Typography>}
    </div>
  );
};
