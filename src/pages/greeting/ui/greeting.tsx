import { selectUser, useGetProfileQuery } from '@/entities/user';
import { useAppSelector } from '@/shared/types/store.ts';
import { Typography } from '@/shared/ui-kit';
import { Logout } from '@/features/logout';

export const GreetingPage = () => {
  const userName = useAppSelector(selectUser);

  const { data: userProfile } = useGetProfileQuery(undefined, { skip: !!userName });

  const displayName = userName || userProfile?.username || '';

  return (
    <div>
      <div>
        <Logout />
      </div>
      <Typography variant={'head1'}>{displayName}</Typography>
    </div>
  );
};
